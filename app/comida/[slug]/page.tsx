import Image from 'next/image'
import { detailesDeComida } from "@/data"
import { ProductDetails } from "@/models"
import { Container, Heading, Section, Text } from '@radix-ui/themes';

export async function generateStaticParams() {
  const comidas: ProductDetails[] = detailesDeComida;

  return comidas.map((comida) => ({
    slug: comida.slug,
  }))
}

const getComida = async (slug: string): Promise<ProductDetails> => {
  return detailesDeComida
    .find((comida) => comida.slug === slug)!
}

export default async function ComidaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const comida = await getComida(slug)
  console.log(comida)

  return <Section className="">
    <div className="relative h-100 mb-4">
      <Image
        fill
        priority
        src={comida.product.imageUrl}
        alt={comida.product.name}
      />
    </div>
    <Container mx="4" align={"center"}>
      <Heading as="h1" align={"center"}>{comida.product.name}</Heading>
    </Container>
  </Section>
}
