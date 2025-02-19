import { useDispatch, useSelector } from "react-redux";
import "./_product.scss";
import { useEffect } from "react";
import getProduct from "../../Redux/productSlice/action";
import { addItem } from "../../Redux/cartSlice";
import { NavLink } from "react-router-dom";

const Product = () => {
  const productData = useSelector((state) => state.pr.product);
  const cartData = useSelector((state) => state.cr);

  const dispatch = useDispatch();

  const handleCart = (item) => {
    const payload = { ...item, quantity: 1 };
    dispatch(addItem(payload));
  };

  console.log(cartData);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div className="product-container">
      {productData.map((ele) => {
        return (
          <div className="mx-4 p-3  product-card">
            <div className="product-image">
              <NavLink to={"/details"} state={ele}>
                <img
                  src={require(`../../assets/images/shop/${ele.product_img}`)}
                />
              </NavLink>
            </div>
            <div className="product-info">
              <h5>
                <NavLink to={"/details"} state={ele}>
                  {ele.product_name}
                </NavLink>
              </h5>
              <p className="product-price">{ele.price}</p>
              <div className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="cart-button my-4" onClick={() => handleCart(ele)}>
                <div className="cart-icon-container ">
                  <i className="fa fa-shopping-cart"></i>
                </div>
                <div className="cart-text-container">
                  <p>Add to the cart</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
