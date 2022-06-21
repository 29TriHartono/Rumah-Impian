import React from 'react';
function Kontak() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-GreenColor">
      <div className="bg-KonsulBackground bg-no-repeat bg-cover min-h-screen flex flex-col md:flex-row items-center justify-center px-setting gap-4">
        <div className="text-white text-left md:w-1/2">
          <h1 className="font-semibold leading-21 md:leading-75">Butuh Konsultasi..? Silahkan Kontak Kami , Kami siap membantu</h1>
          <div className="mt-6 flex flex-col items-start gap-4">
            <h2>Kontak</h2>
            <div className="flex items-center justify-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3>Jln. Moch Kafi II Cipedak, Jagakarsa Jakarta Selatan</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3>021-788-7974</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3>Rumahimpian@gmail.com</h3>
            </div>
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
