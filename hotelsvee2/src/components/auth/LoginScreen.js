import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';
import './login.css';

export const LoginScreen = ({history}) => {

    const dispatch = useDispatch();
   // const { checking } = useSelector( state => state.auth);
    
    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: 'user@example.com',
        lPassword: 'Contraseñ4.'
    });

    const { lEmail, lPassword } = formLoginValues;

    const handleLogin = ( e ) => {
        e.preventDefault();
        dispatch( startLogin( lEmail, lPassword ) );
    }


    
    return (
        
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={ lEmail }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={ lPassword }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>
        </div>
    )
}