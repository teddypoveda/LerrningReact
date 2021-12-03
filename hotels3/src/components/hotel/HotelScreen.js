import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddNewResource } from '../ui/AddNewResource';
import { eventLoadingHotel } from '../../actions/events';
import { useDispatch } from 'react-redux';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


export const HotelScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(eventLoadingHotel());
    }, [dispatch]);
    
    return (
        <>
            <h2>Hotel</h2>
            <AddNewResource tipo="hotel"/>  
        </>
    )
}
