import { Routes, Route } from "react-router-dom";
import MainComponent from "./main-component";

const LadingPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={MainComponent} />
      </Routes>
    </div>
  );
};

export default LadingPage;
