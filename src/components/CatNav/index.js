import { useDispatch, useSelector } from "react-redux";
import "./_Cat-Nav.scss";
import { useEffect } from "react";
import getContegories from "../../Redux/categorySlice/action";
import { Link, NavLink } from "react-router-dom";

function CatNav() {
  const category = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContegories());
  }, []);

  return (
    <div className="CatNav-container">
      <ul className="Catlist">
        <li className="list">
          <NavLink to="/">Home</NavLink>
        </li>
        {category.map((ele) => {
          if (ele.parent_category_id === null) {
            return (
              <li className="list">
                <a href="#">{ele.category}</a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default CatNav;
