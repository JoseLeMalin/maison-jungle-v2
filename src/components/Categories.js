function Categories({ listCateg, categSelected, setCategSelecetd }) {
  function selectCateg(element) {
    console.log(element);

    setCategSelecetd(element);
  }
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
      <button type="button">Réinitialiser filtre</button>
    </div>
  );
}

export default Categories;
