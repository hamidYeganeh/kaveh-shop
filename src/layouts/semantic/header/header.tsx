"use client";

import Image from "next/image";
import Styles from "./header.module.scss";
import { Button, Container, Iconify, Stack } from "@/components";
import { BiHeartCircle } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { Search } from "@/components/common";

export const Header = () => {
  return (
    <Container>
      <div className={Styles.header_container}>
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
          <Button color="primary">حساب کاربری من</Button>
          <Button color="#ff8a66" iconButton>
            <Iconify icon={<AiOutlineHeart />} color="" />
          </Button>
          <Search />
        </Stack>
        <Image
          src="/images/logo/kaveh-logo.svg"
          alt="kaveh-logo"
          width={160}
          height={52}
        />
      </div>
    </Container>
  );
};
