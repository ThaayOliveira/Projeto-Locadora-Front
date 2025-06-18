import api from "@/lib/api";

export const getItem = async (id: number): Promise<Item> => {
    const response = await api.get(`/itens/${id}`);

    return response.data;
};