
import IPRODUCT from "../../constants/interfaces/product";
import ProduckList from "./ProduckList";
import productArray from "./productData";

const ProductItem = () => {
  return (
    <>
      {productArray.map((item: IPRODUCT, index) => {   
        return (
          <>
            <ProduckList key={index} name={item.name} price={item.price} />
          </>
        );
      })}
    </>
  );
};

export default ProductItem;
