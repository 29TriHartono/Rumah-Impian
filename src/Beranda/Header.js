import React from 'react';
import Rumah from '../Img/Header-rumah.png';
import HeaderSatu from '../Img/Header-1.png';
import HeaderDua from '../Img/Header-2.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="pt-32 pb-56 md:pt-0 md:pb-0 md:min-h-screen bg-gradient-to-br from-GreenColor to-black flex items-center px-setting relative overflow-hidden">
      <img className="absolute left-0 top-0 h-full z-0" src={HeaderSatu} alt="" />
      <img className="absolute -right-20 md:right-20 -bottom-10 md:bottom-10 z-0" src={HeaderDua} alt="" />
      <img className="absolute bottom-0 right-0 z-10" src={Rumah} alt="" />

      <div className="text-white text-left z-20">
        <h1 className="md:w-3/5 font-bold lg:leading-75">Membantu Temukan Rumah Impian.</h1>
        <h3 className="md:w-1/2 leading-21 py-4 text-base md:text-xl md:py-6">
          <span className="font-bold">Rumah Impian </span>
          hadir untuk temukan rumah terbaik. untuk dijual maupun di sewa dengan sumbber terpercaya
        </h3>
        <div className="flex items-center gap-4">
          <NavLink to="Layanan" className="py-2 px-4 bg-white text-green-900 font-bold ">
            Temukan Rumah
          </NavLink>
          <NavLink to="/Layanan">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-2 stroke-white" fill="none" viewBox="0 0 24 24">
              <path stokelinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
