function Categories({ listCateg, categSelected, setCategSelecetd }) {
  return (
    <div>
      <select
        id="listCateg"
        name="listCategPlants"
        onChange={(e) => setCategSelecetd(e.target.value)}
        value={categSelected}
        multiple={false}
        selected
      >
        <option key="0" id="null" value=""></option>
        {listCateg.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categories;
