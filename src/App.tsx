import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LoginForm from "./features/auth/components/LoginForm";
import './styles/css/main.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LoggedIn } from "./utils/localeStorageVariables";
import { setLoggedIn } from "./features/auth/authSlice";
import DashBoard from "./pages/DashBoard";
import { RootState } from "./store/store";
import ResetPasswordForm from "./features/auth/components/ResetPasswordForm";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    // PublicRoute: Prevent logged-in users from accessing login/registration pages
    const PublicRoute = ({ children }: { children: JSX.Element }) => {
      if (isLoggedIn) {
        return <Navigate to="/dashboard" />;
      }
      return children;
    };
  
    // ProtectedRoute: Restrict access to dashboard unless the user is logged in
    const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
      if (!isLoggedIn) {
        return <Navigate to="/" />;
      }
      return children;
    };

  useEffect(() => {
    const isLoggedIn: boolean = localStorage.getItem(LoggedIn) === 'true';
    dispatch(setLoggedIn(isLoggedIn));
  }, [dispatch]);

  return(
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={
            <PublicRoute>  
              <AuthPage form={<LoginForm/>}/>
            </PublicRoute>
          } 
        />
        <Route path="/resetPassword" element={
            <PublicRoute>
              <AuthPage form={<ResetPasswordForm/>}/>
            </PublicRoute>
          }
        />

        {/* PROTECTED ROUTES */}
        <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        /> 
      </Routes>
    </BrowserRouter>
 )
}

export default App
