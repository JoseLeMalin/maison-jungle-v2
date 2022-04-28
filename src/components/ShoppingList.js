import plantList from "../datas/plantList.js";
import PlantItem from "./PlantItem.js";
import "../styles/ShoppingList.css";
import Categories from "./Categories.js";
import { useState } from "react";
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

  let plantlistDisplay;
  if (categSelected.length) {
    plantlistDisplay = plantList.filter((plant) =>
      categSelected.includes(plant.category)
    );
  } else {
    plantlistDisplay = plantList;
  }

  return (
    <div>
      <div>
        <Categories
          categAvailable={categAvailable}
          setcategAvailable={setcategAvailable}
          categSelected={categSelected}
          setCategSelected={setCategSelected}
        />
        <div>
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
      </div>
      <ul className="lmj-plant-list">
        {plantlistDisplay.map((plant) => (
          <div key={plant.id} className="lmj-plant-item">
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
    } catch (error) {
      console.log(error);
    }
  }
}

export default ShoppingList;
