import Link from "next/link";
import type { NextPage } from "next";
import useIsMounted from "../../hooks/useIsMounted";
import { useRouter } from "next/router";

const Proyecto: NextPage = () => {
  const isMounted = useIsMounted();
  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <h1>Proyecto: {router.query.nombre}</h1>
      <Link href='/proyectos'>Proyectos</Link>
    </div>
  );
}

export default Proyecto;
