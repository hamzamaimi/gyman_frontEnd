
const LoginForm = () => {
    return(<>
            <div className="auth-form justify-content-center align-items-center d-flex flex-column">
                <div className="" style={{width: '95%'}}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="exampleInputEmail1">
                            Indirizzo Email
                        </label>
                        <input aria-describedby="emailHelp" className="form-control" id="exampleInputEmail1" type="email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="exampleInputPassword1">
                            Password
                        </label>
                        <input className="form-control" id="exampleInputPassword1" type="password" />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">
                            Login
                        </button>   
                    </div>
                </div>
            </div>
    </>)
}

export default LoginForm;