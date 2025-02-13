import "./App.css";
import Topnav from "./components/Topnav";
import CatNav from "./components/CatNav";

import MainComponent from "./components/main-component";

function App() {
  return (
    <div className="App">
      <Topnav />
      <CatNav />
      <MainComponent />
    </div>
  );
}

export default App;
