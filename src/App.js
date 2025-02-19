import "./App.css";
import Topnav from "./components/TopNav/Topnav";
import CatNav from "./components/CatNav";
import { Route, Routes } from "react-router-dom";
import LadingPage from "./components";
import ProductDetail from "./components/ProductDetails";
import CartComponent from "./components/CartComponent";

function App() {
  return (
    <div className="App">
      <Topnav />
      <CatNav />
      <Routes>
        <Route path="/" Component={LadingPage}></Route>
        <Route path="/details" Component={ProductDetail}></Route>
        <Route path="/cart" element={<CartComponent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
