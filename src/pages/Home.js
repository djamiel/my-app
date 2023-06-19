import fight from "../images/highground.mp4";

export default function Home() {
  return (
    <div className="home">
      {/* The background video */}
      <video autoPlay muted loop>
        <source src={fight} type="video/mp4" />
      </video>
      <div className="textbox" id="homeText">
        <p>
          The Force, an integral concept in the Star Wars universe, is a
          mystical energy field that binds all living things together. It is a
          symbiotic power, permeating through the galaxy, granting extraordinary
          abilities to those sensitive to its presence. The Force is divided
          into two opposing aspects: the light side and the dark side. The light
          side represents harmony, peace, and selflessness, empowering Jedi
          Knights to use their powers for the greater good. On the other hand,
          the dark side embodies fear, anger, and selfishness, empowering Sith
          Lords to seek personal power and control. The Force's complex nature
          fuels the eternal struggle between these opposing forces, shaping the
          fate of the galaxy.
        </p>
      </div>
    </div>
  );
}
