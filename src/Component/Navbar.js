import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Img/Logo.png';
function Navbar() {
  const [navbarBtn, setNavbarBtn] = useState();

  const [navbarScroll, setNavbarScroll] = useState(false);

  const navbarScrolling = () => {
    if (window.scrollY > 500) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };
  window.addEventListener('scroll', navbarScrolling);
  return (
    <div className={navbarScroll ? 'fixed w-full text-white bg-DarkGreen z-30 transition duration-700' : 'bg-transparent fixed z-30 w-full text-white'}>
      <div className="w-full h-20  px-setting flex justify-between relative items-center z-20">
        <NavLink to="/" className="flex items-center justify-center gap-2 md:gap-4">
          <img src={logo} alt="" srcSet="" />
          <h2 className="font-bold">Rumah Impian</h2>
        </NavLink>
        <div className="items-center justify-center gap-4 hidden md:flex">
          <NavLink className={({ isActive }) => (isActive ? 'activeNavlink' : 'no-underline hover:underline')} to="Beranda">
            Beranda
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'activeNavlink' : 'no-underline hover:underline')} to="Fitur">
            Fitur
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'activeNavlink' : 'no-underline hover:underline')} to="layanan">
            Temukan Rumah
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? 'activeNavlink' : 'no-underline hover:underline')} to="Kontak">
            Kontak
          </NavLink>
        </div>
        <div className=" items-center justify-center gap-4 hidden md:flex">
          <button className="py-2 px-4">Daftar</button>
          <button className="bg-white text-green-900 py-2 px-4">Masuk</button>
        </div>
        <div className="w-10 h-10 bg-GreenColor bg-opacity-50 rounded-md md:hidden flex items-center justify-center" onClick={() => setNavbarBtn(!navbarBtn)}>
          {navbarBtn ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </div>
      </div>
      <div className={'md:hidden fixed top-0 transition duration-1000 w-full h-screen translate-x-full bg-DarkGreen z-10 flex items-center justify-center' + (navbarBtn ? ' translate-x-1/2' : 'translate-x-full md:hidden')}>
        <div className="flex flex-col text-white items-start w-full gap-10 px-4">
          <NavLink className={({ isActive }) => (isActive ? 'activeNavlink' : 'none')} to="Beranda">
            Beranda
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'activeNavlink' : 'none')} to="Fitur">
            Fitur
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'activeNavlink' : 'none')} to="layanan">
            Temukan Rumah
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'activeNavlink' : 'none')} to="Kontak">
            Kontak
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
