import { getProducts } from "@/services";
import "./global.css";
import { Container, Grid } from "@/components";
import { MarketingSidebar } from "@/layouts";

export default async function ShopPage() {
  // const { products, singleProduct } = await getProducts();
  // console.log(singleProduct);
  const { products } = await getProducts();

  console.log(products);

  return (
    <Container>
      <Grid container>
        <Grid item xl={3}>
          <MarketingSidebar />
        </Grid>
        <Grid item xl={9}></Grid>
      </Grid>
    </Container>
  );
}
