import React from "react";

//Recieving an error saying, "".
const ItemList = (state) => {
  return (
    <div>
      {state.map((item, idx) => {
        return (
          <>
            <ul className="list-group">
              <li className="list-group-item">{item}</li>
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default ItemList;
