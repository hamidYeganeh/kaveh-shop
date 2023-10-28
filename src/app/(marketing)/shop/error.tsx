"use client";

import { Container, Stack } from "@/components";
import { Main } from "@/layouts";

export default function ShopError({ error }: { error: Error }) {
  return (
    <Main>
      <Container>
        <Stack alignItems="center" justifyContent="center">
          <h1>Error : {error.message}</h1>
        </Stack>
      </Container>
    </Main>
  );
}
