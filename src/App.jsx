import Home from "./pages/Home.jsx";
import {useState, useEffect} from "react";
import LoadingPage from "./components/LoadingPage.jsx";
import RegisterForm from "./pages/RegisterForm.jsx";
import RegisterCode from "./pages/RegisterCode.jsx";
import Login from "./pages/Login.jsx";
import PaymentForm from "./pages/PaymentForm.jsx";
import PaymentCode from "./pages/PaymentCode.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import Preview from "./pages/Preview.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
        <Routes>
            <Route path='/' element={<Preview/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<RegisterForm/>}/>
            <Route path='/registerCode' element={<RegisterCode/>}/>
            <Route path='/payment' element={<PaymentForm/>}/>
            <Route path='/paymentCode' element={<PaymentCode/>}/>
            <Route path='/paymentSuccess' element={<PaymentSuccess/>}/>
        </Routes>
  )
}

export default App
