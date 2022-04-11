function CareScale({ scaleValue, careType }) {
  console.log(careType);
  const scaleType = careType === "light" ? "☀️" : "💧";
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
