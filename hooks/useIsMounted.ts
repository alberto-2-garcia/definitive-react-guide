import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useIsMounted = () => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoaded(router.isReady);
  }, [router.isReady]);

  return loaded;
}

export default useIsMounted;