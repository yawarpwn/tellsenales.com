import { AutocompleteApi, BaseItem, AutocompleteState } from "@algolia/autocomplete-core"
import { Results } from './results'


export function ScreenState(props) {
  if(!props.state.query) {
    return 'NO hay query'
  }

  const hasCollection = props.state.collections.some(
    collection => collection.items.length > 0
  )

  if(hasCollection === false) {
    return 'No hay resultados'
  }

  return (
    <div className='DocSearch-Dropdown-Container'>
      {
      props.state.collections.map(collection => {
        if(collection.items.length === 0) {
          return null
        }

        return (
            <Results collection={collection} {...props}  />
        )

      })
    }
    </div>
  )
}
