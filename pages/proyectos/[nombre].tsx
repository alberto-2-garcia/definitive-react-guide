import Link from "next/link";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Proyecto: NextPage = () => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoaded(router.isReady);
  }, [router.isReady]);

  if (!loaded) return null;

  return (
    <div>
      <h1>Proyecto: {router.query.nombre}</h1>
      <Link href='/proyectos'>Proyectos</Link>
    </div>
  );
}

export default Proyecto;
