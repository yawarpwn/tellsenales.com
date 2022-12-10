import {
    AutocompleteApi,
    BaseItem,
    AutocompleteState
} from '@algolia/autocomplete-core'
import { NoResultsIcon } from '../icons/no-results-icon'
import { Results } from './results'
import { memo } from 'preact/compat'
import { StartScreen } from './start-screen'

const ScreenState = memo(
    (props) => {
        if (props.state.status === 'error') {
            return 'Error'
        }

        const hasCollection = props.state.collections.some(
            (collection) => collection.items.length > 0
        )

        if (!props.state.query) {
            return <StartScreen {...props} />
        }

        if (hasCollection === false) {
            return (
                <div className="DocSearch-NoResults">
                    <div className="DocSearch-Screen-Icon">
                        <NoResultsIcon />
                    </div>
                    <p className="DocSearch-Title">
                        No hay resultados para "
                        <strong>{props.state.query}</strong>"
                    </p>
                </div>
            )
        }

        return (
            <div className="DocSearch-Dropdown-Container">
                {props.state.collections.map((collection) => {
                    if (collection.items.length === 0) {
                        return null
                    }

                    return (
                        <Results
                            title="Seguridad"
                            collection={collection}
                            {...props}
                        />
                    )
                })}
            </div>
        )
    },
    function areEqual(_prevProps, nextProps) {
        // We don't update the screen when Autocomplete is loading or stalled to
        // avoid UI flashes:
        //  - Empty screen → Results screen
        //  - NoResults screen → NoResults screen with another query
        return (
            nextProps.state.status === 'loading' ||
            nextProps.state.status === 'stalled'
        )
    }
)

export { ScreenState }
