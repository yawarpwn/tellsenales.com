import { getAllProducts } from './get-all-products.mjs'
import algoliasearch from 'algoliasearch'

const products = await getAllProducts()
products.forEach((product) => {
    console.log(product.contentfulMetadata.tags[0])
})

const ALGOLIA_APP_ID = 'EVPE0RYU8N'
const ALGOLIA_ADMIN_API_KEY = '68c5ac4fdb3df39981e1726a35fd69d6'
const ALGOLIA_INDEX_NAME = 'seguridad-tellsenales'

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY)
const index = client.initIndex(ALGOLIA_INDEX_NAME)
const productsToSend = products.map((product) => ({
    ...product,
    objectID: product.sku
}))

index
    .saveObjects(productsToSend)
    .then((objectIds) => {
        console.log(objectIds)
    })
    .catch((error) => {
        console.log(error)
    })
