import api from "@/lib/api";

export const getItens = async (): Promise<Item[]> => {
    const response = await api.get(`/itens`);
    // console.log(response.data.content);
    return response.data.content;
};