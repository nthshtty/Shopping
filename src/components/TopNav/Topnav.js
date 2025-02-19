import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import "./Topnav.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { filterBySearch } from "../../Redux/productSlice";
import getProduct from "../../Redux/productSlice/action";

function Topnav() {
  const cartCount = useSelector((state) => state.cr.totalItems);
  const [userDet, setuserDet] = useState("");
  const [search1, setSearch] = useState("");
  const [filterData, setFilterData] = useState("");

  const fetchedData = useSelector((state) => state.pr);

  useEffect(() => {
    setFilterData(fetchedData.product);
  }, [fetchedData.status]);

  function handleSuccess(res) {
    setuserDet(jwtDecode(res.credential).name);
  }

  const dispatch = useDispatch();
  function handleSearch() {
    const search = search1;
    setSearch("");
    dispatch(filterBySearch({ search, filterData }));
  }

  return (
    <div>
      <div className="header bg-dark">
        <div className="top-row">
          <div className="brand">
            <h1>eStore</h1>
          </div>
          <div className="inp-container p-0 my-4 w-50 h-25 bg-white">
            <div className="dropdown">
              <select className="select-btn w-100 p-0 m-0">
                <option>Men</option>
                <option>Women</option>
                <option>Kid</option>
              </select>
            </div>
            <input
              className="form-control"
              placeholder="Search..."
              value={search1}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button className="fa fa-search" onClick={handleSearch}></button>
          </div>
          <div className="login-container my-4">
            <i className="fa fa-user-circle user-icon"></i>
            <GoogleOAuthProvider clientId="822488367707-9gvtc03cd59ovi5ih5ims719arh44ikk.apps.googleusercontent.com">
              {userDet === "" ? (
                <GoogleLogin onSuccess={handleSuccess} />
              ) : (
                userDet
              )}
            </GoogleOAuthProvider>
          </div>
          <div className="cart-container my-4">
            <NavLink to="/cart">
              <i className="fa fa-heart cart"></i>
              <i className="fa fa-shopping-cart cart"></i>
            </NavLink>
            {cartCount !== 0 && <div className="cart-counter">{cartCount}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
