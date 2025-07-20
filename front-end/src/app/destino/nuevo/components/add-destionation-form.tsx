"use client";

import { crearDestino } from "@/api/crear-destino";
import { apiUrl } from "@/contants/environment";
import { IDestino } from "@/types/destino";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const styles = {
  label: "w-full text-left font-amiko text-xl leading-[35px]",
  labelContainer: "w-full flex flex-col items-center h-[52px] justify-center",
  input: "w-full bg-page-background rounded-[10px] text-xl h-[52px] outline-none px-4",
  error: "text-red-500 text-sm mt-2"
};


export default function AddDestinationForm() {
  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IDestino>();

  const mutation = useMutation({
    mutationFn: crearDestino,
    onSuccess: () => {
      reset();
      router.push("/");
    },
    onError: (error: any) => {
      alert(error?.response?.data?.message || "Ocurrió un error al crear el sitio");
    },
  });

  const onSubmit = (data: IDestino) => {
    mutation.mutate(data);
  };

  return (
    <div className="bg-card-background rounded-[10px] pt-20 pb-44 mb-40 px-4 flex flex-col items-center">
      <h1 className="font-amiko text-3xl md:text-5xl mb-4 lg:mb-24">Agregar destino turistico</h1>
      <div className="max-w-[735px] w-full flex flex-col items-center">
        <div className={styles.labelContainer}>
          <label htmlFor="nombre" className={styles.label}>Nombre</label>
        </div>
        <input
          id="nombre"
          className={styles.input}
          {...register("nombre", { required: "El nombre es requerido" })}
        />
        {errors.nombre && <span className={styles.error}>{errors.nombre.message}</span>}

        <div className={styles.labelContainer}>
          <label htmlFor="direccion" className={styles.label}>Dirección</label>
        </div>
        <input
          id="direccion"
          className={styles.input}
          {...register("direccion", { required: "La dirección es requerida" })}
        />
        {errors.direccion && <span className={styles.error}>{errors.direccion.message}</span>}

        <div className={styles.labelContainer}>
          <label htmlFor="descripcion" className={styles.label}>Descripción</label>
        </div>
        <textarea
          id="descripcion"
          className={`${styles.input} !h-[121px] py-4`}
          rows={2}
          {...register("descripcion", { required: "La descripción es requerida" })}
        />
        {errors.descripcion && <span className={styles.error}>{errors.descripcion.message}</span>}

        <div className={styles.labelContainer}>
          <label htmlFor="url" className={styles.label}>Url imágen</label>
        </div>
        <input
          id="url"
          className={styles.input}
          {...register("url", {
            required: "La URL es obligatoria",
            pattern: {
              value: /^(https?:\/\/)[\w.-]+(?:\.[\w\.-]+)+(?:[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+)?$/,
              message: "Debe ser una URL válida que comience con http:// o https://"
            }
          })}
        />
        {errors.url && <span className={styles.error}>{errors.url.message}</span>}

        <button
          className="font-abeezee bg-primary text-on-primary rounded-[5px] w-full max-w-[598px] h-[50px] shadow-xl cursor-pointer mt-8 lg:mt-24"
          onClick={handleSubmit(onSubmit)}
        >
          {mutation.isPending ? "Guardando..." : "Agregar destino"}
        </button>
      </div>
    </div>
  );
}
