import React from 'react';
import Header from './Header';
import Layanan from './Layanan';
import Rekomendasi from './Rekomendasi';
import Temukan from './Temukan';

function Beranda() {
  return (
    <div>
      <Header />
      <Rekomendasi />
      <Temukan />
      <Layanan />
    </div>
  );
}

export default Beranda;
