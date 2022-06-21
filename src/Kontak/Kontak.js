import React from 'react';
function Kontak() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-GreenColor">
      <div className="bg-KonsulBackground bg-no-repeat bg-center bg-cover min-h-screen flex flex-col md:flex-row items-center justify-center px-setting gap-4 py-16 md:py-20">
        <div className="text-white text-left md:w-1/2">
          <h1 className="font-semibold leading-21 md:leading-75">Butuh Konsultasi..? Silahkan Kontak Kami , Kami siap membantu</h1>
          <div className="mt-6 flex flex-col items-start gap-4">
            <h2>Kontak</h2>
            <a href="https://goo.gl/maps/EJpo8wCKxXC5wcgZ7" className="styleKontak">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3>Jln. Moch Kafi II Cipedak, Jagakarsa Jakarta Selatan</h3>
            </a>
            <a href="whatsapp://send?text=Hello&phone=+6289680041383" className="styleKontak">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h3>+6289680041383</h3>
            </a>
            <a href="mailto:Rumahimpian@gmail.com" className="styleKontak">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3>Rumahimpian@gmail.com</h3>
            </a>
          </div>
        </div>
        <div className="bg-white px-6 rounded-md py-8 md:py-14 w-full md:w-1/2 flex flex-col gap-6 text-center">
          <h1>Ada Pertanyaan ?</h1>
          <input className="px-4 py-2 bg-slate-200 w-full md:w-9/12 mx-auto" type="text" />
          <input className="px-4 py-2 bg-slate-200 w-full md:w-9/12 mx-auto" type="text" />
          <button className="bg-GreenColor px-4 py-2 w-full md:w-9/12 mx-auto">Kirim</button>
        </div>
      </div>
    </div>
  );
}

export default Kontak;
