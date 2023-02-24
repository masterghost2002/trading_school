import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Courses from "./pages/Courses";
export default function NavRouter() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/privacypolicy'  element={<PrivacyPolicy/>}/>
    <Route path="/courses" element={<Courses/>}></Route>
   </Routes>
  )
}
