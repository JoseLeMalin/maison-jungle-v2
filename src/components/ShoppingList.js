import plantList from "../datas/plantList.js";
/**
 *
 * @returns
 */
function ShoppingList() {
  //plantList.map(plant => {
  //   const categ = listCateg.find(categ => categ === plant.category);
  //   if (categ) {
  //        listCateg.push(categ);
  //   }
  //})
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const listCateg = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  console.log(`listCateg: ${JSON.stringify(listCateg)}`);
  return (
    <div>
      <ul>
        {listCateg.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul>
        {plantList.map((plant) => (
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
  //<ul>
  //  {plantList.map((plant) => {
  //    return <li key={`${plant.id}`}>{plant.name}</li>;
  //  })}
  //</ul>
}

export default ShoppingList;
