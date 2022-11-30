import { Results } from './results'

export function StartScreen(props) {
  if (props.state.status === 'idle' && props.hasCollections === false) {
    if (props.disableUserPersonalization) {
      return null;
    }

    return (
      <div className="DocSearch-StartScreen">
        <p className="DocSearch-Help">No hay busquedas recientes</p>
      </div>
    );
  }

  if (props.hasCollections === false) {
    return null;
  }
 return (
    <div className="DocSearch-Dropdown-Container">
      <Results
        {...props}
        title={'Busquedas recientes'}
        collection={props.state.collections[0]}
      />

    </div>
  );

}
