import { IDestino } from "@/types/destino";
import api from "./api";

export const eliminarDestino = async (id: number): Promise<IDestino> => {
  const response = await api.delete(`/sitios/${id}`);
  return response.data;
};
