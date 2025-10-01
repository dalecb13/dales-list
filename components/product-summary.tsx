import Image from "next/image";
import Link from 'next/link';
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import { SummaryData } from "@/models";

const ProductSummary: React.FC<SummaryData> = (summaryData: SummaryData) => {
  return (
    <Link href={`/comida/${summaryData.slug}`}>
      <Card>
        <Flex gap="3" align="center">
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
          <Text>{summaryData.description}</Text>
          <Text as="div" size="2" color="gray">
            {summaryData.overallRating}
          </Text>
        </Box>
      </Card>
    </Link>
  )
}

export default ProductSummary;
