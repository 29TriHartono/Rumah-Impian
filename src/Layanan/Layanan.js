import React from 'react';
import CardRekomendasi from '../Beranda/CardRekomendasi';
import RekomendasiSatu from '../Img/Rekomendasi-1.png';
import RekomendasiDua from '../Img/rekomendasi-4.png';
import RekomendasiTiga from '../Img/rekomendasi-3.png';

function Layanan() {
  return (
    <div className=" bg-GreenColor px-setting py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <CardRekomendasi image={RekomendasiSatu} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
        <CardRekomendasi image={RekomendasiDua} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
        <CardRekomendasi image={RekomendasiTiga} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
        <CardRekomendasi image={RekomendasiSatu} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
        <CardRekomendasi image={RekomendasiDua} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
        <CardRekomendasi image={RekomendasiTiga} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
        <CardRekomendasi image={RekomendasiSatu} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
        <CardRekomendasi image={RekomendasiDua} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
        <CardRekomendasi image={RekomendasiTiga} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
        <CardRekomendasi image={RekomendasiSatu} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
        <CardRekomendasi image={RekomendasiDua} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
        <CardRekomendasi image={RekomendasiTiga} rp="IDR.200.000.000" alamat="JL. Moch Kafi II Cipedak, Jagakarsa, Jakarta Selatan" tidur="3" mandi="2" luas="360m" />
      </div>
    </div>
  );
}

export default Layanan;
