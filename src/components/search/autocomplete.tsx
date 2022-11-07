import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js'
import { useEffect, useRef } from 'preact/hooks'
import { createElement, render, Fragment } from 'preact'
import ProductItem from './product-item'
import algoliasearch from 'algoliasearch'
import '@algolia/autocomplete-theme-classic'
import './autocomplete.css'

const searchClient = algoliasearch('EVPE0RYU8N', '14bdd4985f3b412d4dd6ffb765545816')

export default function Autocomplete() {
	const containerRef = useRef(null)

	useEffect(() => {
		if (!containerRef.current) {
			return undefined
		}

		const search = autocomplete({
			container: containerRef.current,
			placeholder: 'Buscar Producto',
			defaultActiveItemId: 0,
			renderer: { createElement, Fragment, render },
			getSources: ({ query }) => [
				{
					sourceId: 'products',
					getItems() {
						return getAlgoliaResults({
							searchClient,
							queries: [
								{
									indexName: 'seguridad-tellsenales',
									query,
									params: {
										hitsPerPage: 20,
									},
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
			],
		})

		return () => {
			search.destroy()
		}
	}, [])

	return <div ref={containerRef} />
}
