import React from 'react';

function Temukan() {
  return (
    <div>
      <div className="py-10 md:py-0 md:min-h-screen flex flex-col items-center justify-center px-setting text-white text-center bg-TemukanBackground bg-cover bg-no-repeat text-xs md:text-lg">
        <h1>Temukan Rumah Impianmu.</h1>
        <h2 className="md:w-3/4 mt-4 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id risus turpis nunc nunc at tortor, quam. Adipiscing ut odio purus nisi cum enim nisl facilisis et.</h2>
        <div className="flex flex-col w-full md:px-10">
          <div className="flex p-4 rounded-t-md gap-8 bg-white/50 w-fit  text-DarkGreen font-semibold">
            <div>Jual</div>
            <div>Sewa</div>
            <div>Properti Baru</div>
          </div>
          <div className="grid grid-cols-9 bg-white/50 w-full rounded-bl-md  font-semibold ">
            <input className="col-span-2 bg-transparent text-DarkGreen placeholder:text-GreenColor p-4  focus:outline-none focus:border-white focus:ring-DarkGreen rounded-sm focus:ring-2" type="text" placeholder="Jual" />
            <input className="col-span-2 bg-transparent text-DarkGreen placeholder:text-GreenColor p-4  focus:outline-none focus:border-white focus:ring-DarkGreen rounded-sm focus:ring-2 " type="text" placeholder="Sewa Rumah" />
            <input className="col-span-4 bg-transparent text-DarkGreen placeholder:text-GreenColor p-4  focus:outline-none focus:border-white focus:ring-DarkGreen rounded-sm focus:ring-2 " type="text" placeholder="Properti Baru" />
            <button className="bg-DarkGreen text-white font-bold ">CARI</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temukan;
