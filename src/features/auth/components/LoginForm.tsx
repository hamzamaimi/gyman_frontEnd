import { useDispatch } from "react-redux";
import { loginApi, serverResponse } from "../authApi";
import { LoginData } from "../authApi";
import { useState } from "react";
import { isSuccessResponse } from "../../../utils/httpStatusCodeUtils";
import { setLoggedIn } from "../authSlice";
import { LoggedIn } from "../../../utils/localeStorageVariables";
import { errorsDictionary, serverError } from "../../../utils/manageServerResponse";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginForm = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const [errorMessage, setErrorMessage] = useState<string | null>(null);

const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const emailInputElement = document.getElementById('emailInput')as HTMLInputElement;
    const passwordInputElement = document.getElementById('passwordInput')as HTMLInputElement; 
    const loginData = {
        email: emailInputElement.value,
        password: passwordInputElement.value
    } as LoginData;
    try{
        const response: serverResponse = await loginApi(loginData);
        if(isSuccessResponse(response.status)){
            dispatch(setLoggedIn(true));
            setLocalStorage(response);
            setErrorMessage(null);
            navigate('/dashboard');
        }else{
            setErrorMessage(errorsDictionary[response.message]);
        }
    }catch(err){
        setErrorMessage(serverError);
    }
    
}

return(<>
    <form onSubmit={handleSubmit} className="auth-form justify-content-center align-items-center d-flex flex-column">
        <div className="" style={{width: '95%'}}>
            <div className="mb-3">
                <label className="form-label" htmlFor="exampleInputEmail1">
                    Indirizzo Email
                </label>
                <input required aria-describedby="emailHelp" className="form-control" id="emailInput" type="email" />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="exampleInputPassword1">
                    Password
                </label>
                <input required className="form-control" id="passwordInput" type="password" />
            </div>
            <div className="text-center">
                {errorMessage ? 
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>: null}
                <div className="mb-2">
                    <Link to="/resetPassword">Dimenticato la password?</Link>
                </div>
                <button className="btn btn-primary" type="submit">
                    Login
                </button>   
            </div>
        </div>
    </form>
</>)
}

function setLocalStorage(response: serverResponse) {
    for (const key in response.message) {
        localStorage.setItem(key, response.message[key]);
    }
    localStorage.setItem(LoggedIn, 'true');
}

export default LoginForm;