import Image from "next/image";
import Link from 'next/link';
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import { SummaryData } from "@/models";
import StarRating from "./star-rating";

const ProductSummary: React.FC<SummaryData> = (summaryData: SummaryData) => {
  return (
    <Link href={`/comida/${summaryData.slug}`}>
      <Card>
        <Flex gap="3" align="center" mb="4">
          <Image
            src={summaryData.imageUrl}
            alt={summaryData.productName}
            width={300}
            height={200}
          />
        </Flex>
        <Box>
          <Text as="div" size="2" weight="bold">
            {summaryData.productName}
          </Text>
          <Text as="div" size="2" mb="4">{summaryData.description}</Text>

          <Flex justify="between"  align="center">
            <Text>{summaryData.currency}{summaryData.price}</Text>
            <StarRating rating={summaryData.overallRating} />
          </Flex>
        </Box>
      </Card>
    </Link>
  )
}

export default ProductSummary;
