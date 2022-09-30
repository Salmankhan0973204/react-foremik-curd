import React from "react";
import IPRODUCT from "../../constants/interfaces/product";

const ProduckList: React.FC<IPRODUCT> = (props) => {
  console.log(props, "prps");
  return (
    <>
      <h2>
        {props.name} <span>{props.price}</span>
      </h2>
    </>
  );
};

export default ProduckList;
