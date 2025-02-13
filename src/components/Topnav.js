import "./Topnav.css";

function Topnav() {
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
            <input className="form-control" placeholder="Search..." />
            <button className="fa fa-search"></button>
          </div>
          <div className="login-container my-4">
            <i className="fa fa-user-circle user-icon"></i>
            <h5>
              <a href="#">Login</a>
            </h5>
            /
            <h5>
              <a href="#">Sign up</a>
            </h5>
          </div>
          <div className="cart-container my-4">
            <i className="fa fa-heart cart"></i>
            <i className="fa fa-shopping-cart cart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
