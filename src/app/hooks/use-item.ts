import { useEffect, useState } from "react";
import { getItem } from "../features/itens/api/get-item";

export function useItem(id: number) {
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      const data = await getItem(id);
      setItem(data);
    };

    fetchItem();
  }, [id]);

  return item;
}
