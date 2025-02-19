import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

function CartComponent() {
  const cartCount = useSelector((state) => state.cr.totalItems);
  return <div>{cartCount ? <FilledCart /> : <EmptyCart />}</div>;
}

export default CartComponent;
