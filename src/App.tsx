import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LoginForm from "./features/auth/components/LoginForm";
import './styles/css/main.css';

function App() {
 return(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthPage form={<LoginForm/>}/>} />
    </Routes>
  </BrowserRouter>

 )
}

export default App
