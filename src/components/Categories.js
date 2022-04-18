function Categories({ listCateg, categSelected, setCategSelecetd }) {
  return (
    <div>
      <select
        id="listCateg"
        name="listCategPlants"
        value={categSelected}
        onChange={(e) => setCategSelecetd(e.target.value)}
        selected
      >
        <option id="null" value=""></option>
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
