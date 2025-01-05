import React, { useRef, useMemo } from "react";
import MovieThumb from "./MovieThumb";
import ArrowRight from "./ArrowRight";
import EmblaCarousel from "./Carousel/EmblaCarousel";

const flashMovie = "/assets/imgs/flashMovie.jpg";
const venomMovie = "/assets/imgs/venomMovie.jpg";
const breakingBad = "/assets/imgs/breakingBad.jpg";
const dahmer = "/assets/imgs/dahmer.jpg";
const you = "/assets/imgs/you.jpg";
const strangerThings = "/assets/imgs/strangerThings.jpg";
const flashShow = "/assets/imgs/flashShow.jpg";
const behindHerEyes = "/assets/imgs/behindHerEyes.jpg";
const berlin = "/assets/imgs/berlin.jpg";
const bojackHorseman = "/assets/imgs/bojackHorseman.jpg";
const dexter = "/assets/imgs/dexter.jpg";
const gossipGirl = "/assets/imgs/gossipGirl.jpg";
const htgawm = "/assets/imgs/htgwm.jpg";
const joker2 = "/assets/imgs/joker2.jpg";
const ninjaTurtles = "/assets/imgs/ninjaTurtles.jpg";
const prisonBreak = "/assets/imgs/prisonBreak.jpg";
const split = "/assets/imgs/split.jpg";

const movieThumbs = [
  { src: flashMovie, alt: "Flash Movie" },
  { src: venomMovie, alt: "Venom Movie" },
  { src: breakingBad, alt: "Breaking Bad Show" },
  { src: you, alt: "You Show" },
  { src: dahmer, alt: "Dahmer Show" },
  { src: strangerThings, alt: "Stranger Things Show" },
  { src: flashShow, alt: "Flash Show" },
  { src: behindHerEyes, alt: "Behind Her Eyes Movie" },
  { src: berlin, alt: "Berlin Show" },
  { src: bojackHorseman, alt: "Bojack Horseman Show" },
  { src: dexter, alt: "Dexter Show" },
  { src: gossipGirl, alt: "Gossip Girl Show" },
  { src: htgawm, alt: "How to Get Away With Murder Show" },
  { src: joker2, alt: "Joker 2 Movie" },
  { src: ninjaTurtles, alt: "Ninja Turtles Movie" },
  { src: prisonBreak, alt: "Prison Break Show" },
  { src: split, alt: "Split Movie" },
];

const OPTIONS = { dragFree: true, loop: true };

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function MovieList({ title }) {
  const listRef = useRef(null);

  const shuffledMovies = useMemo(() => shuffleArray([...movieThumbs]), []);

  return (
    <div className="completeList">
      <div className="movieListH1">
        <h1>{title}</h1>
        <div className="hoverElement">
          Discover more <ArrowRight color={"#FFFFFF"} size="25" />
        </div>
      </div>

      <div className="h-min">
        <div className="h-min" ref={listRef}>
          <EmblaCarousel slides={shuffledMovies.map((movie, index) => (
            <MovieThumb key={index} src={movie.src} alt={movie.alt} />
          ))} options={OPTIONS}></EmblaCarousel>
        </div>
      </div>
    </div>
  );
}

export default MovieList;