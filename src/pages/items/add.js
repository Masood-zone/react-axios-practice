import React, { useState } from "react";
import Input from "../../components/input";

const AddItems = () => {
  const [items, setItems] = useState({
    date: "",
    itemName: "",
    price: "",
  });

  function handleItemNameChange(e) {
    setItems({ ...items, itemName: e.target.value });
  }
  function handleDateChange(e) {
    setItems({ ...items, date: e.target.value });
  }
  function handlePriceChange(e) {
    setItems({ ...items, price: e.target.value });
  }
  return (
    <div>
      <form>
        <Input title="Item Name" type="text" onChange={handleItemNameChange} />
        <Input title="Date Purchased" type="date" onChange={handleDateChange} />
        <Input title="Price" type="text" onChange={handlePriceChange} />
      </form>
      <div className="card p-3">
        <h4>Item Name: {items.itemName}</h4>
        <p>Date purchased: {items.date}</p>
        <p>Price ${items.price}.00</p>
      </div>
    </div>
  );
};

export default AddItems;
