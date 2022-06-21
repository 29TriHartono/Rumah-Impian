import React from 'react';

function CardCarousel(props) {
  return (
    <div>
      <div className="flex items-center justify-center relative w-full h-96 mx-6">
        <img className="w-full h-full" src={props.imgUrl} alt="" />
        <div className="bg-black/50 absolute inset-0 flex items-center  justify-center">
          <h1 className="text-white">{props.text}</h1>
        </div>
      </div>
    </div>
  );
}

export default CardCarousel;
