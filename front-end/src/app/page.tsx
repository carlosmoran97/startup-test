"use client";

import Header from "@/components/header";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="bg-card-background">
        <Header>
          <button
            className="bg-primary text-on-primary rounded-[5px] font-amiko w-[325px] h-[50px] shadow-xl cursor-pointer"
            onClick={() => router.push("/destino/nuevo")}
          >
            Agregar destino
          </button>
        </Header>
      </div>
      <main className="bg-page-background">
        <div
          className="h-[650px] w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
        <div
          className="h-[77px] w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banner.png')" }}
        />
        <div>Lista de destinos</div>
      </main>
    </div>
  );
}
