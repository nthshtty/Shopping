import { useDispatch, useSelector } from "react-redux";
import { addQuantity, removeCartItem } from "../../../Redux/cartSlice";
import "./_Filled-cart.scss";

// cartItems: [],
// totalItemprice: 0,
// totalItems: 0,
// totalQuantity: 0,

function FilledCart() {
  const cartData = useSelector((state) => state.cr);

  const dispatch = useDispatch();

  const handleQuantity = (e, key, item) => {
    const payload = {
      opr: e.target.innerText,
      key,
      item,
    };
    dispatch(addQuantity(payload));
  };

  const handleRemove = (key) => {
    console.log("dispatch");
    dispatch(removeCartItem({ key, cartData }));
  };

  return (
    <div>
      <div className="row my-5 fc-main-div">
        <div className="col-8 p-4">
          {cartData.cartItems.map((item, key) => {
            return (
              <div>
                <div className="row cart-item-div">
                  <div className="col-4 img-container">
                    <img
                      src={require(`../../../assets/images/shop/${item.product_img}`)}
                    ></img>
                  </div>
                  <div className="col-8 cart-item-details">
                    <div className="p-3 ">
                      <span className="cart-item-name">
                        {item.product_name}
                      </span>
                      <div>
                        <span className="cart-item-price">${item.price}</span>
                      </div>
                      <div className="product-rating">
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                      </div>
                      <hr />
                      <div>
                        <div className="btn-group mx-3">
                          <div
                            className="btn btn-outline-dark"
                            onClick={(e) => handleQuantity(e, key, item)}
                          >
                            <span>-</span>
                          </div>
                          <div className="btn">{item.quantity}</div>
                          <div
                            className="btn btn-outline-dark"
                            onClick={(e) => handleQuantity(e, key, item)}
                          >
                            <span>+</span>
                          </div>
                        </div>
                        <div
                          className="btn btn-outline-danger mx-4"
                          onClick={() => handleRemove(key)}
                        >
                          <span>
                            <i className="fa fa-trash mx-2"> Remove item</i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
        
        <div className="col-4 px-4 py-3 my-4 cart-summary">
          <h2 className="mb-5 mt-3">Summary</h2>
          <div>
            <span>Cart Total: ${cartData.totalItemprice}</span>
            <span>Shipping Charges: Free</span>
            <hr />
            <span className="summary-total">
              Total: ${cartData.totalItemprice}
            </span>
            <hr />
          </div>
          <div className="btn btn-outline-dark w-100 mb-4 mt-1">checkout</div>
        </div>
      </div>
    </div>
  );
}

export default FilledCart;
