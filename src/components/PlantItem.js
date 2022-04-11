import CareScale from "./CareScale.js";
import "../styles/PlantItem.css";
function PlantItem({ name, id, light, water }) {
  return (
    <div>
      {name}
      <img id={id} alt={`This is a ${name}`} className="lmj-logo"></img>
      {<div className="lmj-sales"> Soldes</div>}
      <CareScale scaleValue={light} careType="light" />
      <CareScale scaleValue={water} careType="water" />
    </div>
  );
}

export default PlantItem;
