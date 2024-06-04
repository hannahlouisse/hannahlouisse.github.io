import Button from "./Button";

export default function ProductCard({ product, onClickAdd }) {
  return (
    <div className="productcard">
      <img className="productimage" src={product.image} alt={`${product.name}`} />
      <span className="productname">{product.name}</span>
      <Button onClick={() => onClickAdd(product)}>Add to Cart</Button>
    </div>
  );
}
