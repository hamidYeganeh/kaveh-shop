"use client";

import { Container, Skeleton } from "@/components";
import { Main } from "@/layouts";

export default function LoadingPage() {
  return (
    <Main>
      <Container>
        <Skeleton />
      </Container>
    </Main>
  );
}
