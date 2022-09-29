import { GraphQLClient, gql } from 'graphql-request'
const CONTENTFUL_SPACE_ID = 'hg6rgg2sftfx'
const CONTENTFUL_ACCESS_TOKEN = 'v3J8b3Ml8J-X6MnDmoIenp2F7zz-6j45pdMB793va5E'
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`

// 'https://graphql.contentful.com/content/v1/spaces/hg6rgg2sftfx/explore?access_token=v3J8b3Ml8J-X6MnDmoIenp2F7zz-6j45pdMB793va5E'
const graphQlclient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`
  }
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

export async function getFullProducts() {
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

// async function callContentful({ query, variables }) {
//   return await graphQlclient.request(query, variables)
// }

// export async function getAllSlug() {
//   const query = gql`
//     {
//       productCollection(limit: 200) {
//         items {
//           slug
//         }
//       }
//     }
//   `
//   try {
//     const data = await callContentful({ query })
//     const slugs = data ? data.productCollection.items : []
//     return slugs
//   } catch (error) {
//     console.error(JSON.stringify(error, undefined, 2))
//   }
// }

// export async function getProductByCategory(category) {
//   const variables = { category }
//   const query = gql`

//     query getProductByCategory($category: String) {
//       productCollection(where: { category: $category }, order: name_ASC) {
//         items {
//           slug
//           name
//           marca
//           price
//           offert
//           sku
//           sys {
//             id
//             firstPublishedAt
//           }
//           img1 {
//             url
//             title
//           }
//         }
//       }
//     }
//   `
//   try {
//     const data  = await graphQlclient.request(query, variables)
//     return data.productCollection.items
//   } catch (error) {
//     console.error(JSON.stringify(error, undefined, 2))
//   }
// }
// export async function getProductByName(name) {
//   const variables = { name }
//   const query = gql`
//     query getProductByCategory($name: String) {
//       productCollection(where: { category: $name }, order: name_ASC) {
//         items {
//           slug
//           name
//           marca
//           price
//           offert

//           sku
//           sys {
//             id
//           }
//           img1 {
//             url
//             title
//           }
//         }
//       }
//     }
//   `
//   try {
//     const data = await graphQlclient.request(query, variables)
//     return data.productCollection.items
//   } catch (error) {
//     console.error(JSON.stringify(error, undefined, 2))
//   }
// }

// export async function getSenalesByCategory(category) {
//   const variables = { category }
//   const query = gql`
//     query getSenalesByCategory($category: String) {
//       senalesCollection(where: { category: $category }, order: code_ASC) {
//         items {
//           name
//           code
//           sys {
//             id
//             firstPublishedAt
//           }
//           img {
//             url
//             title
//           }
//         }
//       }
//     }
//   `
//   try {
//     const data = await graphQlclient.request(query, variables)
//     return data.senalesCollection.items
//   } catch (error) {
//     console.error(JSON.stringify(error, undefined, 2))
//   }
// }

// export async function getProductBySlug(slug) {
//   const variables = { slug }
//   const query = gql`
//     query GetProductBySlug($slug: String) {
//       productCollection(where: { slug: $slug }) {
//         items {
//           sku
//           name
//           slug
//           price
//           offert
//           minimumOrder
//           description
//           marca
//           category
//           dataSheet
//           available
//           shortDesc
//           img1 {
//             url
//             title
//           }
//           img2 {
//             url
//             title
//           }
//           img3 {
//             url
//             title
//           }
//           img4 {
//             url
//             title
//           }
//         }
//       }
//     }
//   `

//   try {
//     const data = await graphQlclient.request(query, variables)
//     return data.productCollection.items
//       ? data.productCollection.items.pop()
//       : {}
//   } catch (error) {
//     console.error(JSON.stringify(error, undefined, 2))
//   }
// }
