type Image = { url: URL, title: string }
type Tag = { name: string; id: string }
type ContentFulMetadata = { tags: Tag[] }

interface Sys {
  id: string
}
export interface Product {
  sku: string
  name: string
  slug: string
  price: number
  offert?: number
  minimumOrder: number
  description: string[]
  marca?: string
  category: string
  dataSheet?: string
  available?: string
  shortDesc?: string
  contentfulMetadata: ContentFulMetadata
  sys: Sys
  img1: Image
  img2?: Image
  img3?: Image
  img4?: Image
}

export interface Senal {
  name: string
  code: string
  category: string
  image: Image
  contentfulMetadata: ContentFulMetadata
}

