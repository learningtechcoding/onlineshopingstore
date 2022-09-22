import "./App.css";
import Header from "./component/Header";

import { Routes, Route } from "react-router-dom";
import p1 from "../src/img/p1.jfif";
import p2 from "../src/img/p2.jpg";
import p3 from "../src/img/p3.jpg";
import p4 from "../src/img/p4.jpg";
import img1 from "../src/img/product-1.jpg";
import img2 from "../src/img/product1-12.png";
import img3 from "../src/img/product2-13.jpg";
import img4 from "../src/img/product3-14.jfif";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Detaildata from "./component/Detaildata";
import Storedata from "./component/Storedata";
import Cart from "./component/Cart";
import Login from "./component/Login";
import Signup from "./component/Signup";
 
function App() {
  let storedata = [
    {
      img: p1,
      head: "laptop",
    },
    {
      img: p2,
      head: "video Game",
    },
    {
      img: p3,
      head: "Movies",
    },
    {
      img: p4,
      head: "Asseccories",
    },
    {
      img: img1,
      head: "Shirts",
    },
    {
      img: img2,
      head: "Watch",
    },
    {
      img: img3,
      head: "Cap",
    },
    {
      img: img4,
      head: "Shoes",
    },
  ];

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home data={storedata} />} />
        <Route path="/detail" element={<Detaildata />} />
        <Route path="/storedata" element={<Storedata data={storedata} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


       
        
       
      </Routes>
      <Footer />
      
      
    </>
  );
}

export default App;
