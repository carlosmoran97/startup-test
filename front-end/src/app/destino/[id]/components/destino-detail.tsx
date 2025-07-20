import { useState } from "react";
import { IDestino } from "@/types/destino";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { eliminarDestino } from "@/api/eliminar-destino";
import Image from "next/image";
import { likearDestino } from "@/api/likear-destino";

interface IDestinoDetailProps {
  destinoData: IDestino;
}

const DestinoDetail = ({ destinoData }: IDestinoDetailProps) => {
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['destinos', destino.id] });
    },
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
    <div className="rounded-[10px] shadow-xl bg-card-background w-full pb-16">
      <div className="px-4 lg:px-32 pt-4 lg:pt-20">
        <div
          className="h-[545px] w-full bg-cover bg-center rounded-t-[10px]"
          style={{ backgroundImage: `url('${destino.url}')` }}
        />
        <div className="w-full flex justify-end p-4 lgp-6">
          <button
            className="font-amiko cursor-pointer"
            onClick={onLikeDestination}
          >
            <div className="flex">
              <span className="mr-1">{destino.likes ?? 0}</span>
              <Image src="/images/like.png" width={24} height={24} alt="Like" />
            </div>
          </button>
        </div>
        <div className="w-full flex justify-center mt-4">
          <h3 className="font-amiko text-[60px] font-bold">{destino.nombre}</h3>
        </div>
        <p className="w-full max-w-[1505px] text-2xl mt-7">
          {destino.descripcion}
        </p>
        <p className="w-full max-w-[660px] text-xl mt-7">
          {destino.direccion}
        </p>
      </div>
    </div>
  );
};

export default DestinoDetail;
