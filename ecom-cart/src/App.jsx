import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { addToCart, removeFromCart } from "./store/cartSlice";

const App = () => {
  const dispatch = useDispatch();
  const { products, cart, total } = useSelector((state) => {
    return state.cart; // Add the return statement here
  });

  console.log(products);

  const purchaseHandler = (e) => {
    let name = e.target.options[e.target.selectedIndex].text;

    let price = parseInt(e.target.value);
    let itemObj = { name, price };
    dispatch(addToCart(itemObj));
  };

  const deleteHandler = (index, price) => {
    let deletItem = { index, price };
    dispatch(removeFromCart(deletItem));
  };
  return (
    <div className="main">
      <h1 className="main">products</h1>

      <select onChange={(e) => purchaseHandler(e)}>
        {products.map((product, index) => {
          return (
            <option key={index} value={product.price}>
              {product.name}:{product.price}
            </option>
          );
        })}
      </select>
      <hr />
      <h2>CARTS</h2>

      {cart.map((item, index) => {
        return (
          <li key={index} onClick={() => deleteHandler(index, item.price)}>
            {item.name}
          </li>
        );
      })}
      <hr />
      <h2>TOTAL</h2>

      <p>{total}</p>
    </div>
  );
};

export default App;
