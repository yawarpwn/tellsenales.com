// import SearchIcon from '@components/icons/search'
import { useEffect } from 'preact/hooks'
import { SearchIcon } from '@components/icons/search-icon'
import { LoadingIcon } from '@components/icons/loading-icon'
import { ResetIcon } from '@components/icons/reset-icon'
import { AutocompleteApi, AutocompleteState } from '@algolia/autocomplete-core'
import { AutocompleteItem } from './autocomplete-modal'
import { Hit } from '@algolia/client-search'

interface SearchBoxProps extends AutocompleteApi<
  React.MouseEvent, React.KeyboardEvent, React.FormEvent
> {
  state: AutocompleteState<AutocompleteItem>
}

export function SearchBox({
  inputRef, onClose, getLabel, getInputProps, getFormProps, getLabelProps, state, autoFocus
}: SearchBoxProps) {

  const { onReset } = getFormProps({
    inputElement: inputRef.current
  })

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef])



  return (
    <>
      <form
        className="DocSearch-Form"
        onSubmit={e => e.preventDefault()}
        onReset={onReset}
      >
        <label className="DocSearch-MagnifierLabel" {...getLabelProps()}>
          <SearchIcon />
        </label>

        <div className="DocSearch-LoadingIndicator">
          <LoadingIcon />
        </div>
        <input
          className="DocSearch-Input"
          ref={inputRef}
          {...getInputProps({
            inputElement: inputRef.current
          })}
        />
        <button
          type='reset'
          title='reset button'
          aria-label='reset button'
          className='DocSearch-Reset'
          hidden={!state.query}
        >
          <ResetIcon />
        </button>
      </form>
      <button
        type='reset'
        aria-label='cancel button'
        className='DocSearch-Cancel'
        onClick={onClose}
      >
        cancel
      </button>
    </>
  )
}
