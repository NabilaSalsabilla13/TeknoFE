import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner"
import Products from "./components/Products/Products";
import headphone from "./assets/hero/headphone.png";
import Footer from "./components/Footer/Footer";
// import Routes from "./Routes";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "JJ Rimex",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  bgColor: "#f42c37",
};

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Banner data={BannerData} />
      <Products />
      <Services />
      {/* <Routes /> */}
      <Banner data={BannerData2} />
      <Footer />
    </>
  )
}

export default App;