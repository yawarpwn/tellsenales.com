import { useMemo, useState, useRef, useEffect } from 'preact/hooks'
import { createAutocomplete } from "@algolia/autocomplete-core"
import { Hit } from '@algolia/client-search'
import  { AutocompleteApi, AutocompleteState, BaseItem } from '@algolia/autocomplete-core'
import  { Product } from '../../types'
import { getAlgoliaResults } from "@algolia/autocomplete-js"
import algoliasearch from 'algoliasearch'
import { SearchBox } from './searchbox'
import { ScreenState } from './screen-state'
import { Footer } from './Footer'

const indexName = 'seguridad-tellsenales'
const appId = 'EVPE0RYU8N'
const apiKey = '14bdd4985f3b412d4dd6ffb765545816'
const searchClient = algoliasearch(appId, apiKey)

export type AutocompleteItem = Hit<{
  name: string
  img1: {
    ur: string
  }

}>

export default function AutocompleteModal({ onClose = () => {} }) {
  const [autocompleteState, setAutocompleteState] = useState<AutocompleteState<AutocompleteItem>>({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: '',
    activeItemId: null,
    status: 'idle',
  })

  console.log(autocompleteState)

  const autocomplete = useMemo(
    () =>
      createAutocomplete<
        AutocompleteItem
      >({
        placeholder: 'Buscar product...',
        getSources({ query }) {
          return [
            {
              sourceId: 'products',
              getItems() {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName,
                      query
                    }
                  ]
                })
              }
            }
          ]
        },
        onStateChange({ state }) {
          setAutocompleteState(state)
        }
      })

    , [onClose])

  const { getRootProps } = autocomplete

  const inputRef = useRef(null)
  const modalRef = useRef(null)

  //hidden scrollbar 
  useEffect(() => {
    document.body.classList.add('DocSearch--active')
    return () => {
      document.body.classList.remove('DocSearch--active')
    }
  }, [])

  //??
  useEffect(() => {
    const setFullViewPortHeight = () => {
      if(modalRef.current) {
        const vh = window.innerHeight * 0.01
        modalRef.current.style.setProperty('--docsearch-vh', `${vh}px`)
      }
    } 

    setFullViewPortHeight()
    window.addEventListener('resize', setFullViewPortHeight)

    return () => window.removeEventListener('resize', setFullViewPortHeight)

  }, [])

  return (
    <div
      className="DocSearch-Container"
      onMouseDown={e => {
        if(e.target === e.currentTarget) {
          onClose()
        }
      }}
      {...getRootProps()}
    >
      <div className='DocSearch-Modal' ref={modalRef}>
        <header className='DocSearch-SearchBar'>
          <SearchBox
            autoFocus={true}
            inputRef={inputRef}
            onClose={onClose}
            state={autocompleteState}
            {...autocomplete}
          />
        </header>
        <div className='DocSearch-Dropdown'>
          <ScreenState 
            {...autocomplete}
            state={autocompleteState}
            inputRef={inputRef}
            />
        </div>
        <footer className='DocSearch-Footer'>
          <Footer />
        </footer>
      </div>
    </div>
  )
}
