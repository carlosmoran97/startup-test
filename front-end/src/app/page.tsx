"use client";

import { obtenerDestinos } from "@/api/obtener-destinos";
import DestinoCard from "@/components/destino-card";
import Header from "@/components/header";
import Loader from "@/components/loader";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from 'next/navigation';
import { useState } from "react";

const PAGE_SIZE = 9;

export default function Home() {
  const router = useRouter();
  const [page, setPage] = useState(0);

  const limit = PAGE_SIZE;
  const offset = page * PAGE_SIZE;

  const { data: response, error, isLoading } = useQuery({
    queryKey: ["destinos", limit, offset],
    queryFn: () => obtenerDestinos({ limit, offset }),
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
        <div id="destinos" className="px-8 my-6 lg:px-14 lg:my-20 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {response && response?.data?.length > 0 && (
            response.data.map((destino) => (
              <DestinoCard key={destino.id} destinoData={destino} />
            ))
          )}
        </div>
        {response && response?.data?.length > 0 && (
          <div className="w-full flex items-center justify-center gap-4 lg:pb-20">
            <button
              onClick={() => {
                setPage((p) => Math.max(p - 1, 0));
              }}
              disabled={page === 0}
              className={`
                px-4 py-2 rounded-xl border 
                text-base font-medium 
                bg-white hover:bg-gray-100 active:bg-gray-200
                border-gray-300 shadow-sm
                transition 
                disabled:opacity-40 disabled:cursor-not-allowed
              `}
            >
              ← Anterior
            </button>
            <span className="mx-2 text-lg text-gray-700 font-semibold select-none">
              Página {page + 1} de {Math.ceil(response.total / limit)}
            </span>
            <button
              onClick={() => {
                setPage((p) =>
                  p + 1 < Math.ceil(response.total / limit) ? p + 1 : p
                )
              }}
              disabled={offset + limit >= response.total}
              className={`
                px-4 py-2 rounded-xl border 
                text-base font-medium 
                bg-white hover:bg-gray-100 active:bg-gray-200
                border-gray-300 shadow-sm
                transition 
                disabled:opacity-40 disabled:cursor-not-allowed
              `}
            >
              Siguiente →
            </button>
          </div>

        )}
        {(!response || response?.data?.length == 0) && (
          <div className="text-2xl font-amiko w-full text-center p-4 pb-20">No hay destinos</div>
        )}
      </main>
    </div>
  );
}
