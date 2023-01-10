import './Zodiac.css';
export default function Zodiacs(props) {
  return (
    <div className="Zodiac" style={{ top: props.top, left: props.left }}>
      {/* <img src={`/zodiacs/${props.name}.jpg`}> </img> */}
      <h2 className="name">{props.name}</h2>
      <p>{props.dates}</p>
    </div>
  );
}
