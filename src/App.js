import Banner from "./components/Topbar/Banner";
import Navbar from "./components/Topbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function App() {
  useEffect(()=>{
    AOS.init({
      offset:200,
      duration: 900,
      easing: 'ease-in-out-quart'
    });
  })
  return (
    <>
      <Banner />
      <Navbar />
      <Home />
      <Footer/>
    </>
  );
}

export default App;
