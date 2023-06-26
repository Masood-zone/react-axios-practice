import React from "react";

const Input = (props) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={props.id} className="form-label">
          {props.title}
        </label>
        <input
          type={props.type}
          className="form-control"
          id={props.id}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  );
};

export default Input;
