import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import ItemList from "./list";

const AddItems = () => {
  const [state, setState] = useState({
    itemName: "",
  });

  const handleSubmit = () => {
    console.log(state);
  };
  return (
    <div>
      <Input
        type="text"
        id="items"
        title="Add Items"
        onChange={(e) => {
          setState((prevState) => {
            return { ...prevState, itemName: e.target.value };
          });
        }}
      />
      <Button title="Approve" type="button" onSubmit={handleSubmit} />
      <ItemList state={state} />
    </div>
  );
};

export default AddItems;
