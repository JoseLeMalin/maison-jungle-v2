import plantList from "../datas/plantList.js";
import PlantItem from "./PlantItem.js";
import "../styles/ShoppingList.css";
import Categories from "./Categories.js";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { forwardRef } from "react";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
/**
 *
 * @returns
 */
function ShoppingList({ cart, setCart }) {
  const listCateg = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  const [categSelected, setCategSelected] = useState([]);
  const [categAvailable, setcategAvailable] = useState(listCateg);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  let plantlistDisplay;
  if (categSelected.length) {
    plantlistDisplay = plantList.filter((plant) =>
      categSelected.includes(plant.category)
    );
  } else {
    plantlistDisplay = plantList;
  }

  const handleClick = () => {
    setOpenSnackBar(true);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackBar(false);
  };
  return (
    <div className="sl-content">
      <div class="sl-filters">
        <Categories
          categAvailable={categAvailable}
          setcategAvailable={setcategAvailable}
          categSelected={categSelected}
          setCategSelected={setCategSelected}
        />
        <button
          type="button"
          onClick={() => {
            setCategSelected([]);
            setcategAvailable(listCateg);
          }}
        >
          Réinitialiser filtre
        </button>
      </div>
      <ul className="sl-lmj-plant-list">
        {plantlistDisplay.map((plant) => (
          <div className="sl-lmj-plant-item" key={plant.id}>
            <PlantItem
              name={plant.name}
              cover={plant.cover}
              light={plant.light}
              water={plant.water}
            />
            <button
              type="button"
              name="addToCart"
              onClick={() => {
                addPlantToCart(plant.name, plant.price, plant.id);
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </ul>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
      ;
    </div>
  );

  function addPlantToCart(name, price, id) {
    try {
      const currentPlantAdded = cart.find((plant) => plant.name === name);
      let sortedCart;
      if (currentPlantAdded) {
        const cartFilteredPlantAdded = cart.filter(
          (plant) => plant.name !== name
        );
        sortedCart = [
          ...cartFilteredPlantAdded,
          {
            name,
            price,
            id,
            amount: currentPlantAdded.amount + 1,
          },
        ];
      } else {
        sortedCart = [...cart, { name, price, id, amount: 1 }];
      }
      sortedCart.sort((a, b) => a.name.localeCompare(b.name));
      setCart(sortedCart);
      handleClick();
    } catch (error) {
      console.log(error);
    }
  }
}

export default ShoppingList;
