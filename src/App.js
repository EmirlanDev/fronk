import logo from "./logo.svg";
import "./App.scss";
import FirstPage from "./component/firstPage/firstPage";
import SecondPage from "./component/secondPage/secondPage";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<FirstPage />} />
        <Route path={"/second"} element={<SecondPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
