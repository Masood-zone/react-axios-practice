import React from "react";

export const Card = ({ children, title }) => {
  return (
    <div
      className="card"
      style={{ width: " 750px", margin: "50px auto", padding: "20px" }}
    >
      <h1 className="card-title">{title}</h1>
      <div className="card-body">{children}</div>
    </div>
  );
};

export const CardSmall = ({ children, title }) => {
  return (
    <div
      className="card"
      style={{ width: " 350px", margin: "20px auto", padding: "20px" }}
    >
      <h1 className="card-title">{title}</h1>
      <div className="card-body">{children}</div>
    </div>
  );
};
