import "./_Cat-Nav.scss";

function CatNav() {
  return (
    <div className="CatNav-container">
      <ul className="Catlist">
        <li className="list">
          <a href="#">Men</a>
        </li>
        <li className="list">
          <a href="#">Women</a>
        </li>
        <li className="list">
          <a href="#">Kids</a>
        </li>
        <li className="list">
          <a href="#">Best Offers</a>
        </li>
      </ul>
    </div>
  );
}

export default CatNav;
