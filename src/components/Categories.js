import * as React from "react";
import TextField from "@mui/material/TextField";
const ariaLabel = { "aria-label": "description" };
function Categories({
  categAvailable,
  setcategAvailable,
  categSelected,
  setCategSelected,
}) {
  return (
    <div>
      {displaySelect()}
      {categSelected.map((categ) => {
        return (
          <TextField
            disabled
            inputProps={ariaLabel}
            defaultValue={categ}
            value={categ}
            size="small"
            id="filled-hidden-label-small"
          />
        );
      })}
    </div>
  );

  function displaySelect() {
    if (categAvailable.length) {
      return (
        <select
          id="listCateg"
          name="listCategPlants"
          onChange={(e) => filterCategories(e.target.value)}
          //value={categSelected}
          multiple={false}
          selected
        >
          <option key="0" id="null" value=""></option>
          {categAvailable.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      );
    }
  }

  function filterCategories(categSelect) {
    // on supprime de la liste déroulante et on met à jour la liste déroulante
    const listCategAvailableFiltered = categAvailable.filter(
      (categ) => categ !== categSelect
    );
    setcategAvailable([...listCategAvailableFiltered]);
    // on rajoute la categSélectionnée dans la liste des categSelectionnées
    setCategSelected([...categSelected, categSelect]);
  }
}

export default Categories;
