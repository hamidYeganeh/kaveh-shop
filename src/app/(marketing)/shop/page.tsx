import { getProducts } from "@/services";
import { Container, Grid, Skeleton } from "@/components";
import { MarketingSidebar, ProductsList, Section } from "@/layouts";
import { PRODUCTS_INITIAL_STATE } from "@/constants";

export const revalidate = 10;

export default async function ShopPage() {
  const { products } = await getProducts({
    limit: PRODUCTS_INITIAL_STATE.limit,
    skip: PRODUCTS_INITIAL_STATE.skip,
  });

  if (!products)
    return (
      <Section>
        <Skeleton />
      </Section>
    );

  return (
    <Container>
      <Grid container>
        <Grid item xl={3}>
          <MarketingSidebar />
        </Grid>
        <Grid item xl={9}>
          <ProductsList products={products.products} />
        </Grid>
      </Grid>
    </Container>
  );
}
