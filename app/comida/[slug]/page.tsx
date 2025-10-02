import Image from 'next/image'
import { detailesDeComida } from "@/data"
import { ProductDetails } from "@/models"
import { Container, Flex, Heading, Section, Text } from '@radix-ui/themes';
import { Rating, RatingButton } from '@/components/ui/shadcn-io/rating';
import MapWrapper from '@/components/map-wrapper';

export async function generateStaticParams() {
  const comidas: ProductDetails[] = detailesDeComida;

  return comidas.map((comida) => ({
    slug: comida.slug,
  }))
}

const getComida = (slug: string): ProductDetails => {
  return detailesDeComida
    .find((comida) => comida.slug === slug)!
}

export default async function ComidaPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params
  const comida = getComida(slug)

  return <Section className="">
    <div className="relative h-100 mb-4">
      <Image
        fill
        priority
        src={comida.product.imageUrl}
        alt={comida.product.name}
      />
    </div>
    <Container mx="4">
      <Flex display="flex" direction="column" align={"center"} gap="1">
        <Heading as="h1">{comida.product.name}</Heading>
        <Text>{comida.product.company.companyName}</Text>
        <Text size="5">{comida.product.currency}{comida.product.price}</Text>
      </Flex>
    </Container>

    <MapWrapper position={comida.product.location.coordinates} zoom={13} />

    <div className="flex flex-row items-center gap-1">
      <Text as="div" size="5" color="gray">
        {comida.rating.overallRating}
      </Text>
      <Rating value={comida.rating.overallRating} readOnly>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton className="text-yellow-500" key={index} />
        ))}
      </Rating>
    </div>
  </Section>
}
