import "./Product.css";
import Price from "./Price";

function Product({ title, description, features }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description} </p>
      <Price oldPrice = "123" newPrices="345"/>
    </div>
  );
}

export default Product;
