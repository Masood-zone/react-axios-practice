import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className="btn btn-success"
      onSubmit={props.onSubmit}
    >
      {props.title}
    </button>
  );
};

export default Button;
