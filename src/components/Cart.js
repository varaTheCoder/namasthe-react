import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

  const handleClearCart = () => {
        dispatch(clearCart());
  }
  return(
  <div>
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold">Cart</h1>
    </div>
    <div className="w-6/12 m-auto">
    <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
      {CartItems.length == 0 && <h1>Add Items to the Cart</h1>}
      <ItemList items={ CartItems } />
    </div>
  </div>)
};

export default Cart;
