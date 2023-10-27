"use client";

import { Container } from "@/components";

export default function ShopError({ error }: { error: Error }) {
  return (
    <Container>
      <div style={{ width: "100%", height: "100%", backgroundColor: "red" }}>
        <h1>Error: {error.message}</h1>
      </div>
    </Container>
  );
}
