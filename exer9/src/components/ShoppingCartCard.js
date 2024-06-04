import Button from "./Button";
import "../style.css";

export default function ShoppingCartCard({ name, qty, onClickDel }) {
  return (
    <div className="cartcard">
      <span>{name}</span>
      <div className="qty-delete">
        <div style={{ display: "flex", columnGap: "8px", alignItems: "center" }}>
          <span style={{ fontSize: "small", color: "var(--blue)", fontWeight: "600" }}>QTY :</span>
          <span>{qty}</span>
        </div>
        <Button onClick={() => onClickDel(name)}>X</Button>
      </div>
    </div>
  );
}
