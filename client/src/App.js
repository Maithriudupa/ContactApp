
import './App.css';
import Home from "./components/home/home";
import ContactPage from "./components/contactPage/contactPage";
import ResetPassword from "./components/ResetPassword/resetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="ContactPage" element={<ContactPage/>}/>
       <Route path="ResetPassword" element={<ResetPassword/>}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
