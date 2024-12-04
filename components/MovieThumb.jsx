import React from "react";
import Image from 'next/image';


function MovieThumb({src, alt}) {
  return (
    <div className="movieThumb">
      <Image src={src} alt={alt} width="1920" height="1080"/>
    </div>
  );
}


export default MovieThumb;