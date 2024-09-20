import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetPasswordApi, serverResponse } from "../authApi";
import { isSuccessResponse } from "../../../utils/httpStatusCodeUtils";
import { errorsDictionary, serverError, successMessagesDictionary } from "../../../utils/manageServerResponse";
import { useDispatch } from "react-redux";
import { setMessage } from "../authSlice";
import { CHECK_PASSWORD_EMAIL } from "../../../utils/successMessages";

const ResetPasswordForm = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event :React.FormEvent) => {
        event.preventDefault();
        const emailInputElement = document.getElementById('emailInput')as HTMLInputElement;
        try{
            const response: serverResponse = await resetPasswordApi(emailInputElement.value);
            if(isSuccessResponse(response.status)){
                setErrorMessage(null);
                setSuccessMessage(successMessagesDictionary[response.message]);
                setLoading(true);

                setTimeout(() => {
                    dispatch(setMessage(CHECK_PASSWORD_EMAIL));
                    navigate('/');
                }, 9000)
            }else{
                setSuccessMessage(null);
                setErrorMessage(errorsDictionary[response.message]);
            }
        }catch (err){
            setErrorMessage(serverError)
        }
    }

    return(
    <>
        <form onSubmit={handleSubmit} className="auth-form justify-content-center align-items-center d-flex flex-column">
            <div className="" style={{width: '95%'}}>
                <div className="mb-2 text-center">
                    <label className="form-label" htmlFor="exampleInputEmail1">
                        <b>Indirizzo Email</b>
                    </label>
                    <input required aria-describedby="emailHelp" className="form-control" id="emailInput" type="email" />
                </div>
                <div className="text-center">
                    {errorMessage ? 
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>: null}
                    {successMessage ? 
                        <div className="alert alert-info" role="alert">
                            {successMessage}
                            <div>
                                Verrai presto reindirizzato.
                                Attendere...
                                {loading && <div className="loading-bar"></div>}
                            </div>
                        </div>: null}
                    <div className="mb-2">
                        <Link to="/">Torna alla schermata di login.</Link>
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Reset
                    </button>   
                </div>
            </div>
        </form>
    </>
    )
}

export default ResetPasswordForm;