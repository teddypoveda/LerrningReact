import React,{useEffect} from 'react'
import { BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Container } from 'react-bootstrap';
import { LoginScreen } from '../components/auth/LoginScreen';
import { Dates } from '../components/ui/Dates';
import { Dashboard } from '../components/dashboard/Dashboard';
import { CountryScreen } from '../components/country/CountryScreen';
import { HotelScreen } from '../components/hotel/HotelScreen';
import { useJwt } from "react-jwt";
import { LoginBotton } from '../components/ui/LoginBotton';
import { startChecking } from '../actions/auth';



export const AppRouters = ({history}) => {
    const dispatch = useDispatch();
    const { checking } = useSelector( state => state.auth);
    const token = localStorage.getItem('token')||'';
    const { decodedToken, isExpired } = useJwt(token);
    localStorage.setItem('userData', decodedToken);
    localStorage.setItem('tokenExpired', isExpired);

    useEffect(() => {

        dispatch( startChecking() )

    }, [dispatch,isExpired]);
    console.log("appRouters checking: "+checking);
    
    if (isExpired) {
        //history.push("/login")
        console.log(history);
    }

    return (
    <>

    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">
                <img
                    src="https://www.shareicon.net/data/512x512/2016/07/10/119874_apps_512x512.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>

             {(isExpired)?<LoginBotton/>:<Dates/>} 
            
        </Container>
  </Navbar>
  
    <Router>
    
        <Switch>
            <Route path="/login" component={ LoginScreen } />
            <Route path="/dashboard" component={ Dashboard } />
            <Route path="/hotel" component={ HotelScreen } />
            <Route path="/country" component={ CountryScreen } />
        </Switch> 
        {(!isExpired)||<Redirect to="/login"/>}
    </Router>
  </>  
  );
}    
       
    

