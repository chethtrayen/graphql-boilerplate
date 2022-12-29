import { useEffect, useState } from "react";

export const useLoader = <T,>(source: T) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (source) {
      setLoading(false);
    }
  }, [source]);

  return { loading, setLoading };
};
