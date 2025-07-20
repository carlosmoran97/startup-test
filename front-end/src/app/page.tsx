"use client";

import { obtenerDestinos } from "@/api/obtener-destinos";
import Header from "@/components/header";
import Loader from "@/components/loader";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useQuery({
    queryKey: ["destinos"],
    queryFn: obtenerDestinos,
  });
  console.log(data);
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
        {isLoading && <Loader />}
        {error && (
          <span className="text-red-500 text-sm p-4">{error.message}</span>
        )}
      </main>
    </div>
  );
}
