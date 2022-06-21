import React from 'react';
import IconSatu from '../Img/Layanan-icon-1.svg';
import IconDua from '../Img/Layanan-icon-2.svg';
import IconTiga from '../Img/Layanan-icon-3.svg';

function Layanan() {
  return (
    <div className="py-10 min-h-screen px-setting flex flex-col justify-center items-center text-center ">
      <h1 className="text-GreenColor font-bold">Layanan Kami</h1>
      <h2 className="mt-2 mb-4 md:mt-4 md:mb-6">Rumah Impian yang hadir menjadi solusi bagi kamu</h2>
      <div className="grid md:grid-cols-3 gap-4 md:gap-8">
        <div className="card  ">
          <div className="flex items-center justify-center rounded-full bg-GreenColor h-14 w-14 p-2">
            <img src={IconSatu} alt="" />
          </div>
          <h2 className="font-semibold">Properti Baru</h2>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac risus mauris id aliquam aliquam commodo bibendum.</div>
        </div>
        <div className="card">
          <div className="flex items-center justify-center rounded-full bg-GreenColor h-14 w-14 p-2">
            <img src={IconDua} alt="" />
          </div>
          <h2 className="font-semibold">Properti Baru</h2>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac risus mauris id aliquam aliquam commodo bibendum.</div>
        </div>
        <div className="card">
          <div className="flex items-center justify-center rounded-full bg-GreenColor h-14 w-14 p-2">
            <img src={IconTiga} alt="" />
          </div>
          <h2 className="font-semibold">Properti Baru</h2>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ac risus mauris id aliquam aliquam commodo bibendum.</div>
        </div>
      </div>
    </div>
  );
}

export default Layanan;
