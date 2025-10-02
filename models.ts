export type CompanyData = {
  companyName: string
  companyLink: string
}

export type ProductData = {
  name: string
  company: CompanyData
  productLink: string
  description: string
  price: string
  currency: string
  imageUrl: string
  type: string
  location: LocationData
}

export type LocationData = {
  country: string
  coordinates: [number, number]
}

export type TastingNotes = {
  saltiness: number,
  sweetness: number,
  acidity: number,
  bitterness: number,
  umami: number,
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
  overallRating: number
  imageUrl: string
  type: string
  currency: string
  price: string
}

export type ProductDetails = {
  slug: string
  product: ProductData
  rating: RatingData
}

// - - - - - - - - - -

export type MockData = {
  id: number,
  title: string,
  description: string
}
