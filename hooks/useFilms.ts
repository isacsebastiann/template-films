//conectarme con la url 
//importar axios
import { useQuery } from "@tanstack/react-query";

import { apiAdapter } from "../adapters/ApiAdapter";
import { Film } from "../types"; 

export const useFilms = () => {
  return useQuery<Film[], Error>({
    queryKey: ["films"],
    queryFn: () => apiAdapter.fetchFilms()
  });
};