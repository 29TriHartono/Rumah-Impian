import React from 'react';
import { NavLink } from 'react-router-dom';
import RekomendasiSatu from '../Img/Rekomendasi-1.png';
import RekomendasiDua from '../Img/rekomendasi-4.png';
import RekomendasiTiga from '../Img/rekomendasi-3.png';
import CardRekomendasi from './CardRekomendasi';

function Rekomendasi() {
  return (
    <div>
      <div className="py-10 md:py-20 flex flex-col gap-4 px-2 md:px-setting">
        <h1 className="mb-4 text-GreenColor font-semibold text-center md:text-left px-2 md:px-0">Rekomendasi Rumah Untuk Anda</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
          <CardRekomendasi image={RekomendasiSatu} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
          <CardRekomendasi image={RekomendasiDua} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
          <CardRekomendasi image={RekomendasiTiga} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
          <CardRekomendasi image={RekomendasiTiga} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
          <CardRekomendasi image={RekomendasiTiga} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
          <CardRekomendasi image={RekomendasiTiga} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
        </div>
        <NavLink to="Layanan">
          <button className="bg-DarkGreen text-white w-40 px-2 py-4 rounded-md">Lihat Lainnya.....</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Rekomendasi;
