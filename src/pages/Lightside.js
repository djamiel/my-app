import anakin from "../images/anakin.jpeg";

//this page is about anakin skywalker
export default function Dightside() {
  return (
    <div className="lightside">
      <img src={anakin} />
      <div className="textbox">
        <p>
          Anakin Skywalker, in his time on the light side, epitomized a valiant
          and compassionate Jedi. With extraordinary abilities, unwavering
          dedication, and a sense of justice, he fought for peace. Anakin's
          skills, warmth, and loyalty made him a respected figure, embodying the
          noble ideals of a true Jedi.
        </p>
      </div>
    </div>
  );
}
