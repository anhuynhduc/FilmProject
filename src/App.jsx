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

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
  return (
      <div className="relative">
          {isLoading ? <LoadingPage /> : <Home/>}
          {/*<RegisterForm/>*/}
          {/*<RegisterCode/>*/}
          {/*<Login/>*/}
          {/*<PaymentForm/>*/}
          {/*<PaymentCode/>*/}
          {/*<PaymentSuccess/>*/}
          {/*<Preview/>*/}
      </div>
  )
}

export default App
