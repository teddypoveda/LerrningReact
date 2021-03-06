import { fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';


export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'Account/login', { email, password }, 'POST' );
        const body = await resp.json();
        
        if( body.token ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
        

    }
}

export const startRegister = ( email, password, name ) => {
    return async( dispatch ) => {
        
        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }


    }
}

export const startChecking = () => {
    return async(dispatch) => {
        const token=localStorage.getItem('token');
        const tokenValid=localStorage.getItem('tokenExpired');

        if(token){
            (tokenValid)?console.log("tokenValid: "+tokenValid):console.log("token invalido");
        }else{
            //window.location.replace("http://localhost:3000/login")
        }

        // const resp = await fetchConToken( 'auth/renew' );
        // const body = await resp.json();

        // if( body.ok ) {
        //     localStorage.setItem('token', body.token );
        //     localStorage.setItem('token-init-date', new Date().getTime() );

        //     dispatch( login({
        //         uid: body.uid,
        //         name: body.name
        //     }) )
        // } else {
        //     dispatch( checkingFinish() );
        // }
    }
}

//const checkingFinish = () => ({ type: types.authCheckingFinish });



const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});


export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch({ type: types.authLogout });
        window.location.replace("http://localhost:3000/");

    }
}

//const logout = () => ({ type: types.authLogout })