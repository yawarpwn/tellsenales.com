import { FunctionComponent } from "preact/compat"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, RefinementList, Hits, Pagination } from 'react-instantsearch-dom'

const searchClient = algoliasearch('EVPE0RYU8N','14bdd4985f3b412d4dd6ffb765545816' )
function HitComponent () {
  return <div>
    Hit compoennt
  </div>
}
const  Search: FunctionComponent = () => {
  return (
    <InstantSearch
      indexName='tellsenales-seguridad'
      searchClient={searchClient}
    >
      <SearchBox />
      <RefinementList attribute='genre' />
      <Hits hitComponent={HitComponent} />
      <Pagination />
    </InstantSearch>
  )
}

export default Search
