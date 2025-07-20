import { IDestino } from "@/types/destino";
import api from "./api";

export const obtenerDestinos = async (): Promise<IDestino[]> => {
  const response = await api.get("/sitios");
  return response.data;
};

export const obtenerDestino = async (id: number): Promise<IDestino> => {
  const response = await api.get(`/sitios/${id}`);
  return response.data;
};
