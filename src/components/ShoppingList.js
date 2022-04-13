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
  const [categSelected, setCategSelecetd] = useState([]);
  const listCateg = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <Categories
        listCateg={listCateg}
        categSelected={categSelected}
        setCategSelecetd={setCategSelecetd}
      />

      <input type="text" value={categSelected ? categSelected : null} />
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
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
              // onClick={() => setCart(cart + 1)}
              onClick={() => {
                addPlantToCart(plant.name, plant.price);
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </ul>
    </div>
  );

  function addPlantToCart(name, price) {
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
            amount: currentPlantAdded.amount + 1,
          },
        ];
      } else {
        sortedCart = [...cart, { name, price, amount: 1 }];
      }
      sortedCart.sort((a, b) => a.name.localeCompare(b.name));
      setCart(sortedCart);
    } catch (error) {
      console.log(error);
    }
  }
}

export default ShoppingList;
