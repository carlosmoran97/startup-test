import { IDestino } from "@/types/destino";
import api from "./api";

export const likearDestino = async (id: number): Promise<IDestino> => {
  const response = await api.post(`/sitios/${id}/like`);
  return response.data;
};
