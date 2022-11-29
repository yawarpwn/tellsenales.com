type Img = { url: string; title: string }
type Tag = { name: string; id: string }
type ContentFulMetadata = { tags: Tag[] }

interface Sys {
	id: string
}
export declare interface Product {
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
	img1: Img
	img2?: Img
	img3?: Img
	img4?: Img
}

export interface Senal {
	name: string
	code: string
	category: string
	img: Img
	contentfulMetadata: ContentFulMetadata
}
