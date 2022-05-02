import sun from "../assets/sun.svg";
import water from "../assets/water.svg";

function CareScale({ scaleValue, careType }) {
  const scaleType =
    careType === "light" ? (
      <img src={sun} alt="sun-icon" />
    ) : (
      <img src={water} alt="water-icon" />
    );
  const range = [1, 2, 3];

  return (
    <div>
      {range.map((value) => {
        return scaleValue >= value ? (
          <span key={value.toString()}>{scaleType}</span>
        ) : null;
      })}
    </div>
  );
}

export default CareScale;
