import { useMemo, useState, useRef, useEffect, useCallback } from 'preact/hooks'
import { createAutocomplete } from "@algolia/autocomplete-core"
import { Hit } from '@algolia/client-search'
import { AutocompleteApi, AutocompleteState, BaseItem } from '@algolia/autocomplete-core'
import { Product } from '../../types'
import { createStoredSearches } from './store-searches'
import { getAlgoliaResults } from "@algolia/autocomplete-js"
import algoliasearch from 'algoliasearch'
import { useTouchEvents } from './use-touch-events'
import { useTrapFocus } from './use-trap-focus'
import { SearchBox } from './searchbox'
import { ScreenState } from './screen-state'
import { Footer } from './Footer'

const indexName = 'seguridad-tellsenales'
const appId = 'EVPE0RYU8N'
const apiKey = '14bdd4985f3b412d4dd6ffb765545816'
const searchClient = algoliasearch(appId, apiKey)

export type AutocompleteItem = Hit<Product>  
 


export default function AutocompleteModal({
  onClose = () => { },
  initialQuery = ''
}) {
  const [autocompleteState, setAutocompleteState] = useState<AutocompleteState<AutocompleteItem>>({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: 'cintas',
    activeItemId: null,
    status: 'idle',
  })


  const favoriteSearches = useRef(
    createStoredSearches({
      key: `__DOCSEARCH_FAVORITE_SEARCHES__${indexName}`,
      limit: 10,
    })
  ).current;

  const recentSearches = useRef(
    createStoredSearches({
      key: `__DOCSEARCH_RECENT_SEARCHES__`,
      // We display 7 recent searches and there's no favorites, but only
      // 4 when there are favorites.
      limit: favoriteSearches.getAll().length === 0 ? 7 : 4,
    })
  ).current;

  const saveRecentSearch = useCallback(
    function saveRecentSearch(item) {
      // We don't store `content` record, but their parent if available.
      const search = item.type === 'content' ? item.__docsearch_parent : item;

      // We save the recent search only if it's not favorited.
      if (
        search &&
        favoriteSearches
          .getAll()
          .findIndex((x) => x.objectID === search.objectID) === -1
      ) {
        recentSearches.add(search);
      }
    },
    [favoriteSearches, recentSearches]
  );



  const autocomplete = useMemo(
    () =>
      createAutocomplete<
        AutocompleteItem,
        React.FormEvent,
        React.MouseEvent,
        React.KeyboardEvent

      >({
        placeholder: 'Buscar producto...',
        openOnFocus: true,
        initialState: {
          query: initialQuery,
        },
        getSources({ query }) {

          if (!query) {
            return [
              {
                sourceId: 'recentSearches',
                onSelect({ item, event }) {
                  saveRecentSearch(item);

                  if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
                    onClose();
                  }
                },
                getItemUrl({ item }) {
                  return item.slug;
                },
                getItems() {
                  return recentSearches.getAll();
                },
              },
              {
                sourceId: 'favoriteSearches',
                onSelect({ item, event }) {
                  saveRecentSearch(item);

                  if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
                    onClose();
                  }
                },
                getItemUrl({ item }) {
                  return item.slug;
                },
                getItems() {
                  return favoriteSearches.getAll();
                },
              },
            ];

          }

          return [
            {
              sourceId: 'products',
              getItemUrl({ item }) {
                return `/seguridad/${item.slug}`
              },
              getItems() {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName,
                      query,
                      params: {
                        hitsPerPage: 7,
                        snippetEllipsisText: '...',
                      }
                    }
                  ]
                })
              }
            }
          ]
        },
        onStateChange({ state }) {
          setAutocompleteState(state)
        },
        navigator: {
          // navigate({ itemUrl }) {
          //   window.location.assign(itemUrl)
          // },
          // navigateNewTab({ itemUrl }) {
          //   const windowReference = window.open(itemUrl, '__blank', 'noopener')

          //   if (windowReference) {
          //     windowReference.focus()
          //   }

          // },
          // navigateNewWindow({ itemUrl }) {
          //   window.open(itemUrl, '__blank', 'noopener')
          // }
        },

      })

    , [onClose])

  const { getRootProps, getEnvironmentProps } = autocomplete

  const inputRef = useRef<HTMLInputElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useTouchEvents({
    getEnvironmentProps,
    inputElement: inputRef.current,
    panelElement: dropdownRef.current,
    formElement: formRef.current
  })

  useTrapFocus({ container: containerRef.current})

  //hidden scrollbar 
  useEffect(() => {
    document.body.classList.add('DocSearch--active')
    return () => {
      document.body.classList.remove('DocSearch--active')
    }
  }, [])

  //full sceen on mobile fix
  useEffect(() => {
    const setFullViewPortHeight = () => {
      if (modalRef.current) {
        const vh = window.innerHeight * 0.01
        modalRef.current.style.setProperty('--docsearch-vh', `${vh}px`)
      }
    }

    setFullViewPortHeight()
    window.addEventListener('resize', setFullViewPortHeight)

    return () => window.removeEventListener('resize', setFullViewPortHeight)

  }, [])

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.scrollTop = 0
    }
  }, [autocompleteState.query])

  return (
    <div
      className={[
        'DocSearch',
        'DocSearch-Container',
        autocompleteState.status === 'stalled' && 'DocSearch-Container--Stalled',
        autocompleteState.status === 'error' && 'DocSearch-Container--Errored',
      ]
        .filter(Boolean)
        .join(' ')
      }
      ref={containerRef}
      // role='button'
      tabIndex={0}
      onMouseDown={e => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
      {...getRootProps({
        'aria-expanded': true
      })}
    >
      <div className='DocSearch-Modal' ref={modalRef}>
        <header className='DocSearch-SearchBar' ref={formRef}>
          <SearchBox
            autoFocus={true}
            inputRef={inputRef}
            onClose={onClose}
            state={autocompleteState}
            {...autocomplete}
          />
        </header>
        <div className='DocSearch-Dropdown' ref={dropdownRef}>
          <ScreenState
            {...autocomplete}
            state={autocompleteState}
            inputRef={inputRef}
            onItemClick={(item) => {
              saveRecentSearch(item)
              onClose()
            }}
          />
        </div>
        <footer className='DocSearch-Footer'>
          <Footer />
        </footer>
      </div>
    </div>
  )
}
