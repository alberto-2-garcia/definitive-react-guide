import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import useIsMounted from "../../../hooks/useIsMounted";

const Pokemon: NextPage = () => {
  const isMounted = useIsMounted();
  const router = useRouter();

  if (!isMounted) return null;

  const { id } = router.query;

  return (
    <div>
      <h1>Pokemon: {id}</h1>
      <Link href={`/pokemones/${id}/descripcion`}>Descripcion</Link>
      <Link href='/'>Inicio</Link>
    </div>
  );
}

export default Pokemon;
