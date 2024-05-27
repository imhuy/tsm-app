"use client";

import { revalidatePath } from "next/cache";
import { redirect, usePathname } from "next/navigation";

import AppLayout from "@/components/Layout/AppLayout";
import { NextPage } from "next";

const Home: NextPage<any> = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    revalidatePath("/check-pro");
    redirect("/check-pro");
  }

  return (
    <AppLayout>
      <></>
    </AppLayout>
  );
};

export default Home;
