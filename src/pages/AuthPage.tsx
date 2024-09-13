import '../styles/authPage.css';
import gymanLogo from '../assets/gyman_logo.png';
import { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTenantLogo } from '../features/tenant/tenantSlice';

const AuthPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const tenant = useSelector((state: RootState) => state.tenant);

    useEffect(() => {
        dispatch(fetchTenantLogo());
    }, [dispatch])
    
    return(
        <div className="container-fluid h-100">
            <div className="row h-100">
                <div id="auth-sidebar" className="col-md-5 d-none d-md-block">
                    <div className="d-flex flex-column align-items-center justify-content-center h-100 p-4">
                        <div className="d-flex align-items-center logo-container row d-flex justify-content-center" style={{marginBottom: '30%'}}>
                            <img src={gymanLogo} alt="Gyman Logo" className="logo" />
                            {tenant.base64logo ? (
                                <img src={tenant.base64logo} alt="Tenant Logo" className="additional-logo ms-3" /> 
                            ) : null}
                        </div>
                        <h2 className="sidebar-title">Migliora il tuo allenamento, <br/>ogni giorno.</h2>
                        <p className="sidebar-text">Scopri un'esperienza fitness personalizzata, sempre a portata di mano.</p>
                    </div>
                </div>
                <div className="col-md-7 col-12">
                    col 2
                </div>
            </div>
        </div>
    )
}

export default AuthPage;