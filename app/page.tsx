import ProductSummary from "@/components/product-summary";
import summaryData from "@/data";
import { Heading, Section, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> 
        <Section>
          <Heading as="h1">Dale&apos;s List</Heading>
          <Text>A food rating website</Text>
        </Section>
        <Section>
          {
            summaryData.map(datum => {
              return <ProductSummary
                key={datum.productName}
                productName={datum.productName}
                location={datum.location}
                overallRating={datum.overallRating}
                imageUrl={datum.imageUrl}
              />;
            })
          }
        </Section>
      </main>
    </div>
  );
}
