"use client";

import Header from "@/components/header";
import { useRouter } from "next/navigation";

interface IDestionationLayoutProps {
  children: React.ReactNode;
}

export default function DestinationLayout({
  children
}: IDestionationLayoutProps) {
  const router = useRouter();

  return (
    <div className="bg-page-background max-w-full">
      <Header>
        <button
          className="bg-primary text-on-primary rounded-[5px] font-amiko w-[325px] h-[50px] shadow-xl cursor-pointer"
          onClick={() => router.push("/")}
        >
          Listado de destinos
        </button>
      </Header>
      <section>{children}</section>
      <footer>
        <div
          className="h-[77px] w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banner.png')" }}
        />
      </footer>
    </div>
  );
}
