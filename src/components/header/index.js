import React from "react";

const Header = (props) => {
  return (
    <div className="display-1 text-center p-4">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
