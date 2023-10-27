import { getProducts } from "@/services";
import "./global.css";
import { Container, Grid } from "@/components";
import { MarketingSidebar, ProductsList } from "@/layouts";
import { PRODUCTS_INITIAL_STATE } from "@/constants";

export const revalidate = 10;

export default async function ShopPage() {
  const { products } = await getProducts({
    limit: PRODUCTS_INITIAL_STATE.limit,
    skip: PRODUCTS_INITIAL_STATE.skip,
  });

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
