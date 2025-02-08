import Product from "./Product.jsx";

function ProductTab() {
  return (
    <>
      <Product title="Phone"  price={30000}/>
      <Product title="Laptop" price={40000}/>
      <Product title="Pen"  price={10}/>
    </>
  );
}

export default ProductTab;
