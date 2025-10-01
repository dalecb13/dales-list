export type ProductData = {
  name: string
  description: string
  price: number
  currency: string
  imageUrl: string
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
  productName: string
  location: LocationData
  overallRating: number
  imageUrl: string
}

export type ProductDetails = {
  product: ProductData
  location: LocationData
  tastingNotes: TastingNotes
  rating: RatingData
}

// - - - - - - - - - -

export type MockData = {
  id: number,
  title: string,
  description: string
}
