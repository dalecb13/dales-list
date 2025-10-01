import { ProductDetails, SummaryData } from "@/models";

export const detailesDeComida: ProductDetails[] = [
  {
    slug: 'risketos-original',
    product: {
      name: "Risketos (Original)",
      description: 'Risketos Original es un snack similar a Cheetos. Ellos son crujientes con sabor de queso chedar.',
      price: 0.99,
      currency: '€',
      imageUrl: '/risketos.jpg',
      type: "Snack",
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
    },
  },
];

export const summaryData: SummaryData[] = detailesDeComida.map(comida => {
  return {
    slug: comida.slug,
    productName: comida.product.name,
    description: comida.product.description,
    location: comida.location,
    overallRating: comida.rating.overallRating,
    imageUrl: comida.product.imageUrl,
    type: comida.product.type,
    currency: comida.product.currency,
    price: comida.product.price
  }
});
