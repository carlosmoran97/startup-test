"use client";

import { obtenerDestinos } from "@/api/obtener-destinos";
import DestinoCard from "@/components/destino-card";
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
        <div className="px-8 py-6 lg:px-14 lg:py-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {data && data?.length > 0 && (
            data.map((destino) => (
              <DestinoCard key={destino.id} destinoData={destino} />
            ))
          )}
        </div>
        {(!data || data?.length == 0) && (
          <div className="text-2xl font-amiko w-full text-center p-4 pb-20">No hay destinos</div>
        )}
      </main>
    </div>
  );
}
