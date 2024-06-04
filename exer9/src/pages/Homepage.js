import { useState } from "react";
import ProductCard from "../components/ProductCard";
import ShoppingCartCard from "../components/ShoppingCartCard";
import "../style.css";

export default function Homepage() {
  const products = [
    {
      name: "Microwave",
      image:
        "https://citihardware.com/iloilo/12800-large_default/i-microwave-oven-boston-bay-ga-mobg-0520la-23l-digital-silver.jpg",
    },
    {
      name: "Nescafe Classic",
      image:
        "https://www.digitindahan.com.ph/cdn/shop/files/ph-11134201-7qukw-leqskru4q44pcc_800x.jpg?v=1695613436",
    },
    {
      name: "iPhone 15 Pro Max",
      image:
        "https://powermaccenter.com/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-US_1445x.jpg?v=1695861362",
    },
    {
      name: "Puffer Jacket",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS1fCDl2EtA22I6OQbj0Rbi-dCyft1gvW9g4fo4HBzD_HiAmCzOWx-9nITeioaue69-8tohYo9eklIsJIxCvmCHNwQBUXCuUf_3_Bvrm_sP7uelL7lMy05y7w&usqp=CAE",
    },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const onClickAdd = (product) => {
    let isPresent = false;
    cartItems.forEach((cartItem) => {
      if (cartItem.name == product.name) {
        isPresent = true;
      }
    });
    if (isPresent) {
      cartItems.forEach((cartItem) => {
        if (cartItem.name == product.name) {
          cartItem.qty += 1;
        }
      });
    } else {
      setCartItems([...cartItems, { name: product.name, qty: 1 }]);
    }
    setCartTotal(cartTotal + 1);
  };

  const onClickDel = (name) => {
    const newCartItems = cartItems.filter((item) => item.name != name);
    setCartItems(newCartItems);

    let newTotal = 0;
    newCartItems.forEach((item) => {newTotal += item.qty});
    setCartTotal(newTotal);
  };

  return (
    <div className="homepage">
      <div className="productcards">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <ProductCard product={product} onClickAdd={onClickAdd} />
          </div>
        ))}
      </div>

      <div className="cart">
        <span className="carttitle">Shopping Cart</span>
        <div className="carttotal">
          <span style={{ fontSize: "small", color: "var(--blue)", fontWeight: "600" }}>TOTAL :</span>
          <span>{cartTotal}</span>
        </div>
        {cartItems.map((item, index) => (
          <div className="cartitem" key={index}>
            <ShoppingCartCard name={item.name} qty={item.qty} onClickDel={onClickDel} />
          </div>
        ))}
      </div>
    </div>
  );
}
