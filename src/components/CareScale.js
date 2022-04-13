import sun from "../assets/sun.svg";
import water from "../assets/water.svg";

const quantityLabel = {
  1: "few",
  2: "medium",
  3: "a lot",
};

function CareScale({ scaleValue, careType }) {
  const scaleType =
    careType === "light" ? (
      <img src={sun} alt="sun-icon" />
    ) : (
      <img src={water} alt="water-icon" />
    );
  const range = [1, 2, 3];

  return (
    <div onClick={() => handleClic({ scaleValue, careType })}>
      {range.map((value) => {
        return scaleValue >= value ? (
          <span key={value.toString()}>{scaleType}</span>
        ) : null;
      })}
    </div>
  );
}
function handleClic({ scaleValue, careType }) {
  alert(`That plant requires ${quantityLabel[scaleValue]} of ${careType}`);
}
export default CareScale;
