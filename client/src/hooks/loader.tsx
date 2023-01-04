import { useEffect, useState } from "react";

const Loader = ({ children }: { children?: JSX.Element }) => {
  if (children) <>{children}</>;
  return <>Loading</>;
};

export const useLoader = <T,>(source: T) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (source) {
      setLoading(false);
    }
  }, [source]);

  return { Loader, loading, setLoading };
};
