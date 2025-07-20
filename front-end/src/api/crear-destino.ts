import { IDestino } from "@/types/destino";
import api from "./api";

export const crearDestino = async (destino: IDestino) => {
  const response = await api.post("/sitios", destino);
  return response.data;
};
