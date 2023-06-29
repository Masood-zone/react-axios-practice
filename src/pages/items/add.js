import React, { useState } from "react";
import Input from "../../components/input";

const AddItems = () => {
  const [itemName, setItemName] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState([]);
  let unqId = 0;
  function resetInputs() {
    setItemName("");
    setDate("");
    setPrice("");
  }

  function handleClick(e) {
    e.preventDefault();
    const structure = {
      unqId: unqId++,
      itemName: itemName,
      date: date,
      price: price,
    };
    setItems((prevItems) => {
      return [...prevItems, structure];
    });
    resetInputs();
  }

  return (
    <div>
      <form>
        <Input
          title="Item Name"
          value={itemName}
          type="text"
          onChange={(e) => {
            setItemName(e.target.value);
          }}
        />
        <Input
          title="Date Purchased"
          value={date}
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <Input
          title="Price"
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <button className="btn btn-success" onClick={handleClick}>
          Add
        </button>
      </form>

      {items.map((item) => {
        return (
          <>
            <div className="card p-3 m-3" key={item.unqId}>
              <h4>Item Name: {item.itemName}</h4>
              <p>Date purchased: {item.date}</p>
              <p>Price: ${item.price}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AddItems;
