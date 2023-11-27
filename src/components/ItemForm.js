import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onAddItems}) {
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("Produce");

  function handleNewName(e) {
    console.log(e);
    setNewName(e.target.value);
  }

  function handleNewCategory(e) {
    console.log(e)
    setNewCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: newName,
      category: newCategory,
    }
    onAddItems(newItem);

  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newName} onChange={handleNewName}/>
      </label>

      <label>
        Category:
        <select name="category" value={newCategory} onChange={handleNewCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
