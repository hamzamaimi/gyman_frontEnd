import gymanLogo from '../assets/gyman_logo.png';
import { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { JSXElementConstructor, ReactElement, useEffect } from 'react';
import { fetchTenantLogo } from '../features/tenant/tenantSlice';

const AuthPage = (props: { form: ReactElement<any, string | JSXElementConstructor<any>>; }) => {
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
                    <div className="justify-content-center align-items-center d-flex flex-column" style={{height: '100dvh'}}>
                        <div className='text-center mb-2'>
                            <img src={gymanLogo} alt="Gyman Logo" className="logo logo-responsive" />
                            {tenant.base64logo ? (
                                <img src={tenant.base64logo} alt='Gyman Logo' className='additional-logo logo-responsive ms-3' />
                            ): null }
                        </div>
                        {props.form}
                        <div className='intro-section-responsive text-center mt-3'>
                            <h2 className="sidebar-title">Migliora il tuo allenamento, <br/>ogni giorno.</h2>
                            <p className="sidebar-text">Scopri un'esperienza fitness personalizzata, sempre a portata di mano.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage;