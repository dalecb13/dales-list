import { ProductDetails, SummaryData } from "@/models";

export const summaryData: SummaryData[] = [
  {
    slug: 'risketos-original',
    productName: "Risketos (Original)",
    description: 'Risketos Original es un snack similar a Cheetos. Ellos son crujientes con sabor de queso chedar.',
    location: {
      city: "Madrid",
      country: "España",
    },
    overallRating: 3.9,
    imageUrl: '/risketos.jpg',
    type: 'Snack',
  }
];

export const detailesDeComida: ProductDetails[] = [
  {
    slug: 'risketos-original',
    product: {
      name: "Risketos (Original)",
      description: 'Risketos Original es un snack similar a Cheetos. Ellos son crujientes con sabor de queso chedar.',
      price: 0.99,
      currency: '€',
      imageUrl: '/risketos.jpg',
    },
    location: {
      city: "Madrid",
      country: "España",
    },
    rating: {
      overallRating: 3.9,
      tastingNotes: {
        saltiness: 1,
        sweetness: 1,
        acidity: 1,
        bitterness: 1,
        mouthfeel: 'Soft',
      }
    }
  }
]
