import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Api from "./components/API";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/api" element={<Api />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
