"use client";

import Image from "next/image";
import Styles from "./header.module.scss";
import { Button, Container, Iconify, Stack, TextField } from "@/components";
import { AiOutlineHeart } from "react-icons/ai";
import { Search } from "@/components/common";
import { Profile } from "./containers";

export const Header = () => {
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className={Styles.header_container}
      >
        <Image
          src="/images/logo/kaveh-logo.svg"
          alt="kaveh-logo"
          width={160}
          height={52}
        />

        <Stack
          direction="row"
          alignItems="center"
          fitContent
          style={{ backgroundColor: "lightblue" }}
          spacing={4}
        >
          <Search />

          <Button color="#ff8a66" iconButton size="md">
            <Iconify icon={<AiOutlineHeart />} />
          </Button>

          <Profile />
        </Stack>
      </Stack>
    </Container>
  );
};
