import React from "react";
import Image from 'next/image';


function MovieThumb({src, alt}) {
  return (
    <div className="movieThumb">
      <Image src={src} alt={alt} />
    </div>
  );
}


export default MovieThumb;