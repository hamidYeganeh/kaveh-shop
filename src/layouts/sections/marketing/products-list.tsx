import { Card, Grid } from "@/components";
import { FC } from "react";

type TProductsList = { products: { title: string }[] };

export const ProductsList: FC<TProductsList> = (props) => {
  const { products } = props;

  return (
    <div>
      <Grid container justifyContent="space-between" alignItems="stretch">
        {products.map((product: any) => (
          <Grid item key={product.id} xl={4} lg={6} md={12} sm={12} xs={12}>
            <Card {...product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
