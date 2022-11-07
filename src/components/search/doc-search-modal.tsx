import { getAlgoliaResults } from '@algolia/autocomplete-js'
import Autocomplete from './autocomplete'
import ProductItem from './product-item'
import algoliasearch from 'algoliasearch'

const searchClient = algoliasearch('EVPE0RYU8N', '14bdd4985f3b412d4dd6ffb765545816')

export default function DocSearchModal({ onClose }) {
	return (
		<div
			className="DocSearch-Container"
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					onClose()
				}
			}}
		>
			<div className="DocSearch-Modal">
				<Autocomplete
					openOnFocus={true}
					getSources={({ query }) => [
						{
							sourceId: 'products',
							getItems() {
								return getAlgoliaResults({
									searchClient,
									queries: [
										{
											indexName: 'tellsenales-seguridad',
											query,
										},
									],
								})
							},
							templates: {
								item({ item, components }) {
									return <ProductItem hit={item} components={components} />
								},
							},
						},
					]}
				/>
			</div>
		</div>
	)
}
