import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LoginForm from "./features/auth/components/LoginForm";
import './styles/css/main.css';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { LoggedIn } from "./utils/localeStorageVariables";
import { setLoggedIn } from "./features/auth/authSlice";
import DashBoard from "./pages/DashBoard";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isLoggedIn: boolean = localStorage.getItem(LoggedIn) === 'true';
    dispatch(setLoggedIn(isLoggedIn));
  }, [dispatch]);

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage form={<LoginForm/>}/>} />
        <Route path="/dashboard" element={<DashBoard />} /> 
      </Routes>
    </BrowserRouter>
 )
}

export default App
