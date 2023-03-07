import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import About from "./pages/About";
export default function NavRouter() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/privacypolicy'  element={<PrivacyPolicy/>}/>
    <Route path="/courses" element={<Courses/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/about" element={<About/>}/>
   </Routes>
  )
}
