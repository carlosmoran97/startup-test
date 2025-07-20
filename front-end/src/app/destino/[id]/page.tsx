"use client";

import { obtenerDestino } from '@/api/obtener-destinos';
import Loader from '@/components/loader';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import DestinoDetail from './components/destino-detail';


export default function DestinationDetailPage() {
  const params = useParams();
  const id = params.id;
  const { data, error, isLoading } = useQuery({
    queryKey: ["destino", params.id],
    queryFn: () => obtenerDestino(Number(params.id)),
    enabled: !!id,
  });
  if (error) return <div>Error al cargar el destino.</div>;
  if (isLoading) return <Loader />
  return (
    <div className="px-4 lg:px-14 pt-4 lg:pt-8 pb-20">
      <DestinoDetail destinoData={data!} />
    </div>
  );
}
