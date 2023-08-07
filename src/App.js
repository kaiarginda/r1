import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import Pages from "./Pages/Pages";
import Listings from "./Listings/Listings";
import Testimonial from "./Testimonial/Testimonial";
import Details from "./Details/Details";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import ListingsPage from "./ListingsPage/ListingsPage";
import { Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/homes"
          element={[
            <Navbar pth="/homes" />,
            <Hero />,
            <Info />,
            <Pages />,
            <Listings />,
            <Testimonial />,
            <Details />,
            <Footer />,
          ]}
        ></Route>
        <Route
          path="/listings"
          element={[<Navbar pth="/listings" />, <ListingsPage />]}
        ></Route>
      </Routes>
      {/* <Hero />
      <Info />
      <Pages />
      <Listings />
      <Testimonial />
      <Details />
      <Footer /> */}
    </div>
  );
}

export default App;
