import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <div>
      <h1>About</h1>
      <Link href='/'>Inicio</Link>
    </div>
  )
}

export default About;
