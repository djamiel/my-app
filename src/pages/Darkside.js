import vader from "../images/vader.jpeg";

//this page is about darth vader
export default function Darkside() {
  return (
    <div className="darkside">
      <img src={vader} />
      <div className="textbox">
        <p>
          Anakin Skywalker, consumed by the dark side became a feared Sith Lord.
          His immense power brought devastation and turmoil. Anakin's descent
          into darkness shattered his former virtues, replacing them with
          ruthless ambition. His fall served as a cautionary tale of the
          corrupting influence of the dark side.
        </p>
      </div>
    </div>
  );
}
