import { useState } from "react";
import { IDestino } from "@/types/destino";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { eliminarDestino } from "@/api/eliminar-destino";
import Image from "next/image";
import { likearDestino } from "@/api/likear-destino";

interface IDestinoCardProps {
  destinoData: IDestino;
}

const DestinoCard = ({ destinoData }: IDestinoCardProps) => {
  const router = useRouter();
  const [destino, setDestino] = useState<IDestino>(destinoData);
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: eliminarDestino,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['destinos'] });
    },
    onError: (error: any) => {
      alert(error?.response?.data?.message || "Ocurrió un error al eliminar el sitio");
    },
  });

  const likeMutation = useMutation({
    mutationFn: likearDestino,
    onError: (error: any) => {
      alert(error?.response?.data?.message || "Ocurrió un error al likear el sitio");
    },
  });

  const onLikeDestination = () => {
    setDestino(d => ({
      ...d,
      likes: (d.likes ?? 0) + 1,
    }));
    likeMutation.mutate(destino.id!);
  }

  const onDelete = () => {
    if (window.confirm("¿Está seguro de eliminar este elemento?")) {
      deleteMutation.mutate(destino.id!);
    }
  };

  return (
    <div className="rounded-[10px] shadow-xl bg-card-background w-full max-w-[494px] pb-16">
      <div
        className="h-[219px] w-full bg-cover bg-center rounded-t-[10px]"
        style={{ backgroundImage: `url('${destino.url}')` }}
      />
      <div className="px-12 relative">
        <button
          className="absolute top-0 right-7 font-amiko cursor-pointer"
          onClick={onLikeDestination}
        >
          <div className="flex">
            <span className="mr-1">{destino.likes ?? 0}</span>
            <Image src="/images/like.png" width={24} height={24} alt="Like" />
          </div>
        </button>
        <div className="w-full flex justify-center mt-7">
          <h3 className="max-w-[330px] font-amiko text-[45px] font-bold">{destino.nombre}</h3>
        </div>
        <p className="w-full max-w-[400px] text-2xl mt-7">
          {destino.descripcion}
        </p>
        <p className="w-full max-w-[400px] text-xl mt-7">
          {destino.direccion}
        </p>
        <div className="flex flex-col items-center justify-center max-w-[400px] w-full">
          <button
            className="font-abeezee text-md mb-3 h-[50px] w-full cursor-pointer"
            onClick={() => router.push(`/destino/${destino.id}`)}
          >
            Ver más
          </button>
          <button
            className="font-abeezee text-md h-[37px] bg-accent shadow-xl w-full text-on-primary rounded-[5px] cursor-pointer"
            onClick={onDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinoCard;
