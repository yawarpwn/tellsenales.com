import { AutocompleteApi, BaseItem, AutocompleteState } from "@algolia/autocomplete-core"
import { NoResultsIcon } from "../icons/no-results-icon"
import { Results } from './results'


export function ScreenState(props) {
  if(!props.state.query) {
    return (
    <div className='DocSearch-StartScreen'>
        <p className='DocSearch-Help'>No hay busquedas recientes</p>
    </div>
    ) 
  }

  const hasCollection = props.state.collections.some(
    collection => collection.items.length > 0
  )

  if(hasCollection === false) {
    return (
    <div className='DocSearch-NoResults'>
        <div className='DocSearch-Screen-Icon'>
          <NoResultsIcon />
        </div>
        <p className='DocSearch-Title'>
          No hay resultados para "<strong>{props.state.query}</strong>"</p>
    </div>
    ) 
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
