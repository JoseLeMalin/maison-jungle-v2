import * as React from "react";
import TextField from "@mui/material/TextField";
const ariaLabel = { "aria-label": "description" };

const Categories = ({
  categAvailable,
  setcategAvailable,
  categSelected,
  setCategSelected,
}) => {
  const displaySelect = () => {
    if (categAvailable.length) {
      return (
        <select
          id="listCateg"
          name="listCategPlants"
          onChange={(e) => filterCategories(e.target.value)}
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
  };

  const filterCategories = (categSelect) => {
    // on supprime de la liste déroulante et on met à jour la liste déroulante
    const listCategAvailableFiltered = categAvailable.filter(
      (categ) => categ !== categSelect
    );
    setcategAvailable([...listCategAvailableFiltered]);
    // on rajoute la categSélectionnée dans la liste des categSelectionnées
    setCategSelected([...categSelected, categSelect]);
  };
  return (
    <div>
      {displaySelect()}
      {categSelected.map((categ) => {
        return (
          <TextField
            disabled
            key={categ}
            inputProps={ariaLabel}
            value={categ}
            size="small"
            id={categ}
          />
        );
      })}
    </div>
  );
};

export default Categories;
