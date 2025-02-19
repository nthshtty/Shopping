import { NavLink } from "react-router-dom";
import "./_Empty-Cart.scss";

function EmptyCart() {
  return (
    <div className="p-4 empty-container">
      <span>Cart is empty</span>
      <hr />
      <NavLink to="/">
        <div className="btn btn-warning">
          <span style={{ fontWeight: 600 }}>Continue shopping</span>
        </div>
      </NavLink>
    </div>
  );
}

export default EmptyCart;
