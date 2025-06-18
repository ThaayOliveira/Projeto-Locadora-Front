import { useEffect, useState } from "react";
import { getItens } from "../features/itens/api/get-itens";

export function useItens() {
  const [itens, setItens] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItens = async () => {
      const data = await getItens();
      setItens(data);
    };

    fetchItens();
  }, []);

  return itens;
}