import Link from "next/link";
import { Button } from "@/components";
import { revalidatePath } from "next/cache";
import { useTranslation } from "@/i18n";
import { Trans } from "react-i18next/TransWithoutContext";
import path from "path";
import * as HOME_FA from "@/i18n/locales/fa/home.json";

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation("home");
  async function handleSubmit(formData: FormData) {
    "use server";

    revalidatePath("/");
  }

  console.log('hamid');
  

  return (
    <>
      <h1>{t('title')}</h1>
      <form action={handleSubmit}>
        <input name="username" />
        <input name="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
