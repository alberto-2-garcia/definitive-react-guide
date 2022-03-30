import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import useIsMounted from "../../../hooks/useIsMounted";

const PokemonDescripcion: NextPage = () => {
  const isMounted = useIsMounted();
  const router = useRouter();

  if (!isMounted) return null;

  const { id } = router.query;
  return (
    <div>
      <h1>Pokemon: {id} - Descripcion</h1>
      <Link href={`/pokemones/${id}`}>Regresar</Link>
    </div>
  );
}

export default PokemonDescripcion;
