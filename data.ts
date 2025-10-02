import { ProductDetails, SummaryData } from "@/models";

export const detailesDeComida: ProductDetails[] = [
  {
    slug: 'risketos-original',
    product: {
      name: "Risketos (Original)",
      company: {
        companyName: 'Risi',
        companyLink: 'https://risi.es',
      },
      productLink: 'https://risi.es/es/snacks/risketos',
      description: 'Risketos Original es un snack similar a Cheetos. Ellos son crujientes con sabor de queso chedar.',
      price: '1,43',
      currency: '€',
      imageUrl: '/risketos.jpg',
      type: "Snack",
      location: {
        country: "Spain",
        coordinates: [3.7492, 40.4637],
      }
    },
    rating: {
      overallRating: 3.1,
      tastingNotes: {
        saltiness: 3,
        sweetness: 2,
        acidity: 1,
        bitterness: 1,
        umami: 3,
        mouthfeel: 'Crunchy',
      }
    },
  },
  {
    slug: 'carrefour-sardinillas-con-salsa-picantona',
    product: {
      name: "Carrefour Sardinillas con Salsa Picantona",
      company: {
        companyName: 'Carrefour',
        companyLink: 'https://www.carrefour.es/',
      },
      productLink: 'https://www.carrefour.es/supermercado/sardinillas-con-salsa-picantona-classic-carrefour-60-g/R-VC4AECOMM-615271/p',
      description: '',
      price: '1.42',
      currency: '€',
      imageUrl: '/carrefour-sardinillas-con-salsa-picantona.jpg',
      type: "Conservas",
      location: {
        country: "Spain",
        coordinates: [3.7492, 40.4637]
      }
    },
    rating: {
      overallRating: 3.7,
      tastingNotes: {
        saltiness: 1,
        sweetness: 1,
        acidity: 1,
        bitterness: 1,
        umami: 3,
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
    overallRating: comida.rating.overallRating,
    imageUrl: comida.product.imageUrl,
    type: comida.product.type,
    currency: comida.product.currency,
    price: comida.product.price
  }
});
