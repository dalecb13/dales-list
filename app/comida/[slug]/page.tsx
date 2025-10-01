import { detailesDeComida } from "@/data"
import { ProductDetails } from "@/models"

export async function generateStaticParams() {
  const comidas: ProductDetails[] = detailesDeComida;

  return comidas.map((comida) => ({
    slug: comida.slug,
  }))
}

export default async function ComidaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  console.log('slug', slug)
  // const post = await getPost(slug)

  return <div>
    <h1>Hola, Page de Comida!</h1>
    <p>{slug}</p>
  </div>
}
