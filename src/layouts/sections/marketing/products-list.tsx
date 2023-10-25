import { Grid } from "@/components";
import { FC } from "react";

type TProductsList = { products: { title: string }[] };

export const ProductsList: FC<TProductsList> = (props) => {
  const { products } = props;

  return (
    <div>
      <Grid container alignItems="stretch" style={{ height: "100%" }}>
        {products.map(({ title }) => (
          <Grid item key={title} xl={4} style={{ height: 469 }}>
            {title}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
