import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./_Product-details.scss";
import { addItem } from "../../Redux/cartSlice";

const ProductDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const ProductDet = location.state;

  function addToCart() {
    dispatch(addItem({ ...ProductDet, quantity: 1 }));
  }

  return (
    <div>
      <div className="row container my-5 product-details-container">
        <div className="col-5 product-img-container">
          <img
            src={require(`../../assets/images/shop/${ProductDet.product_img}`)}
          ></img>
        </div>

        <div className="product-info col-7">
          <h5 className="product-name">{ProductDet.product_name}</h5>
          <div className="product-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <hr />
          <div className="product-price">
            MRP : <span className="price">{ProductDet.price}</span>
            <div style={{ fontSize: "0.6em" }}>Inclusive of all taxes.</div>
          </div>
          <div className="my-3 product-description">
            <span>Some description on the product...</span>
          </div>

          <div
            className="btn btn-warning cart-container my-5 "
            onClick={addToCart}
          >
            <div className="cart-icon-container ">
              <i className="fa fa-shopping-cart"></i>
            </div>
            <div className="cart-text-container">
              <p>Add to the cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
