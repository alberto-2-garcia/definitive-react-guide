import type { NextPage } from 'next';
import Link from 'next/link';

const Proyectos: NextPage = () => {
  const proyectos = ['buenas', 'tardes'];
  return (
    <div>
      <h1>Proyectos</h1>
      <Link href='/'>Inicio</Link>
      <div>
        {proyectos.map(proyecto => (
          <div key={proyecto}>
            <Link href={`/proyectos/${proyecto}`}>{proyecto}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
