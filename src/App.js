import Banner from "./components/Topbar/Banner";
import Navbar from "./components/Topbar/Navbar";
import Footer from "./components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavRouter from "./NavRouter";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      offset:50,
      duration: 700,
      easing: 'ease-in-out-quart',
      once: true
    }, []);
    return () => { }
  })
  return (
    <>
      <Banner />
      <Navbar />
      <NavRouter />
      <Footer />
    </>
  );
}

export default App;
