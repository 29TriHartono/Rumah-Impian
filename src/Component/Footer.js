import React from 'react';
import Logo from '../Img/Logo.png';

function Footer() {
  return (
    <div className="w-full px-setting flex flex-col md:flex-row items-center justify-between bg-black text-white py-10 gap-4 md:py-16">
      <div className="flex items-center justify-center gap-4">
        <img src={Logo} alt="" />
        <div>Rumah Impian</div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <a href="">Beranda</a>
        <a href="">Contact</a>
        <a href="">Fitur</a>
        <a href="">Layanan</a>
      </div>
    </div>
  );
}

export default Footer;
