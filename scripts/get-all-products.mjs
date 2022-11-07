import { GraphQLClient, gql } from 'graphql-request'

const endpoint = `https://graphql.contentful.com/content/v1/spaces/hg6rgg2sftfx`

// 'https://graphql.contentful.com/content/v1/spaces/hg6rgg2sftfx/explore?access_token=v3J8b3Ml8J-X6MnDmoIenp2F7zz-6j45pdMB793va5E'
const graphQlclient = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer v3J8b3Ml8J-X6MnDmoIenp2F7zz-6j45pdMB793va5E`,
	},
})

export async function getAllProducts() {
	const query = gql`
		{
			productCollection(limit: 200) {
				items {
					sku
					name
					slug
					price
					offert
					minimumOrder
					description
					marca
					category
					dataSheet
					available
					shortDesc
					img1 {
						url
						title
					}
					img2 {
						url
						title
					}
					img3 {
						url
						title
					}
					img4 {
						url
						title
					}
					contentfulMetadata {
						tags {
							id
							name
						}
					}
				}
			}
		}
	`
	try {
		const data = await graphQlclient.request(query)
		return data.productCollection.items
	} catch (error) {
		console.error(JSON.stringify(error, undefined, 2))
	}
}
