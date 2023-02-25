import Banner from "./components/Topbar/Banner";
import Navbar from "./components/Topbar/Navbar";
import Footer from "./components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavRouter from "./NavRouter";
import { useEffect, useState } from "react";
import Splash from "./components/Splash";
function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in-out-quart',
      once: true
    }, []);
    setTimeout(() => setShowSplash(false), 2000);
    return () => { }
  })
  return (
    <>
      {showSplash ? <Splash /> :
        <>
          <Banner />
          <Navbar />
          <NavRouter />
          <Footer />
        </>
      }

    </>
  );
}

export default App;
