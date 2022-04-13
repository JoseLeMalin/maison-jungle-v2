import CareScale from "./CareScale.js";
import "../styles/PlantItem.css";
function PlantItem({ name, cover, light, water }) {
  return (
    <div>
      <li>
        {name}
        <img src={cover} alt={`This is a ${name}`} className="lmj-logo"></img>
        <CareScale scaleValue={light} careType="light" />
        <CareScale scaleValue={water} careType="water" />
      </li>
    </div>
  );
}

export default PlantItem;
