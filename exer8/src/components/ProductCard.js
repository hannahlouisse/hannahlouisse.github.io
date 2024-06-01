import Button from "./Button";

export default function ProductCard({ name, image }) {
  return (
    <div className="productcard">
      <img className="productimage" src={image} alt={`${name} image`} />
      <span className="productname">{name}</span>
      <Button onClick={() => console.log('Added ' + name + ' to the cart!')}>Add to Cart</Button>
    </div>
  );
}
