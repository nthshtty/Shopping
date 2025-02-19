import { useSelector } from "react-redux";
import "./_side-nav.scss";
import getContegories from "../../Redux/categorySlice/action";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { displayProduct, filterByPrice } from "../../Redux/productSlice";

const SideNav = () => {
  const accordion = useSelector((state) => state.categoryReducer.categories);
  const fecthedProduct = useSelector((state) => state.pr);
  const [product, setProduct] = useState();
  const [minRange, setminRange] = useState(10);
  const [maxRange, setmaxRange] = useState(130);

  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(fecthedProduct);
  }, [fecthedProduct.status]);

  const handleItem = (item) => {
    const payload = { product, item };
    dispatch(displayProduct(payload));
  };

  const handleFilterByPrice = () => {
    const payload = { minRange, maxRange, product };
    dispatch(filterByPrice(payload));
  };
  useEffect(() => {
    dispatch(getContegories());
  }, []);

  return (
    <div className="sideNav-container">
      <div className="my-3">
        <div className="section-title">
          <h3>Category</h3>
        </div>
        {accordion.map((ele, key) => {
          if (ele.parent_category_id === null) {
            return (
              <div className="accordion">
                <div className="accordion-item indivitual-category">
                  <div className="accordion-header">
                    <button
                      className="accordion-button "
                      data-bs-target={`#collapse` + key}
                      data-bs-toggle="collapse"
                    >
                      <div className="category-title">
                        <a href="#">{ele.category}</a>
                      </div>
                    </button>
                  </div>

                  <div
                    className="accordion-collapse collapse"
                    id={`collapse` + key}
                  >
                    <div className="accordion-body">
                      <ul>
                        {accordion.map((item) => {
                          if (ele.id === item.parent_category_id) {
                            return (
                              <li
                                className="sub-item"
                                onClick={() => handleItem(item)}
                              >
                                <a href="#">{item.category}</a>
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="filter-container">
        <div className="section-title">
          <h3>Filter By Price</h3>
        </div>
        <div className="">
          <label>Min:{minRange}</label>
          <input
            className="form-range"
            type="range"
            min={10}
            max={130}
            step={10}
            onChange={(e) => setminRange(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Max:{maxRange}</label>
          <input
            className="form-range"
            type="range"
            min={10}
            max={130}
            step={10}
            onChange={(e) => setmaxRange(e.target.value)}
          ></input>
        </div>
        <button
          className="btn btn-outline-dark my-3"
          onClick={handleFilterByPrice}
          type="button"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default SideNav;
