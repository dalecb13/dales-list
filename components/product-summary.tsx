import { SummaryData } from "@/models";
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

const ProductSummary: React.FC<SummaryData> = (summaryData: SummaryData) => {
  return (
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
				<Text as="div" size="2" color="gray">
					{summaryData.overallRating}
				</Text>
			</Box>
    </Card>
  )
}

export default ProductSummary;
