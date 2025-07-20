import { IDestino } from "@/types/destino";
import api from "./api";
import { IPage } from "@/types/page";

interface DestinosQuery {
  limit?: number;
  offset?: number;
}

export const obtenerDestinos = async (query: DestinosQuery): Promise<IPage<IDestino[]>> => {
  const { limit = 9, offset = 0 } = query;
  const response = await api.get(`/sitios?limit=${limit}&offset=${offset}`);
  return response.data;
};

export const obtenerDestino = async (id: number): Promise<IDestino> => {
  const response = await api.get(`/sitios/${id}`);
  return response.data;
};
