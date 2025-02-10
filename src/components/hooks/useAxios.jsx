import useSWR from "swr";
import api from "../../services/api";


export function useAxios(url) {
  const { data, error, mutate } = useSWR(
    url,
    async (url) => {
      try {
        const response = await api.get(url);
        return response.data;
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        throw err;
      }
    },
    {
      revalidateOnFocus: false,
    }
  );

  return { data, error, mutate };
}
