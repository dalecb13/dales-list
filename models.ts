export type ProductData = {
  name: string
  description: string
  price: number
  currency: string
  imageUrl: string
  type: string
}

export type LocationData = {
  city: string
  country: string
}

export type TastingNotes = {
  saltiness: number,
  sweetness: number,
  acidity: number,
  bitterness: number,
  mouthfeel: string
}

export type RatingData = {
  overallRating: number
  tastingNotes: TastingNotes
}

// - - - - - - - - - -

export type SummaryData = {
  slug: string
  productName: string
  description: string
  location: LocationData
  overallRating: number
  imageUrl: string
  type: string
}

export type ProductDetails = {
  slug: string
  product: ProductData
  location: LocationData
  rating: RatingData
}

// - - - - - - - - - -

export type MockData = {
  id: number,
  title: string,
  description: string
}
