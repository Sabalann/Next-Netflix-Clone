import React from "react";

function FeaturedFilm() {
  return (
    <div className="FeaturedFilm">
        <div className="video-wrapper">
            <video autoPlay={true} muted controls width="1920" height="1080">
              <source src="/assets/vids/netflixtrailer.mp4" type="video/mp4"></source>
            </video>
        </div>
    </div>
  );
}

export default FeaturedFilm;