import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2'

export const eventLoadingHotel = () =>{
    return async (dispatch) => {
        try {
            const resp = await fetchConToken('hotel?PageNumber=1&PageSize=20',{});
            const body = await resp.json();

            dispatch(eventHotelGet(body));

        } catch (error) {
            console.log(error);
        }

        // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        // axios.get(url).then(response=>{
        // this.setState({data:response.data})
        // }).catch(error=>{
        // console.log(error.message);
        // })
    }
} 
export const eventAddNewHotel = (event)=>{
    
    return async (dispatch) => {
        try {
            const resp = await fetchConToken('hotel',event,'Post');
            console.log(resp);
            dispatch(eventLoadingHotel());
            dispatch(closeModal());

        } catch (error) {
            console.log(error);
        }
    }   
}
export const eventDeleteHotel = (event)=>{
    
    return async (dispatch) => {
        try {
            const resp = await fetchConToken('hotel/'+event,{},'Delete');
            if(resp.ok){
                Swal.fire(
                'Exitosa!',
                'Se eliminó correctamente!',
                'success'
              )}else{
              Swal.fire(
                'Error!',
                'No se puede eliminar!',
                'error'
              );
              }
            dispatch(eventLoadingHotel());
            dispatch(closeModalDelete());

        } catch (error) {
            console.log(error);
        }
    }   
}
export const eventUpdateHotel = (event)=>{
    
    return async (dispatch) => {
        try {
            const resp = await fetchConToken('hotel/'+event.id,{event},'Put');
            console.log(resp);
            dispatch(eventLoadingHotel());
            dispatch(closeModal());

        } catch (error) {
            console.log(error);
        }
    }   
}
const closeModalDelete = ()=> ({
    type: types.uiModalDeleteClose    
});

const closeModal = ()=> ({
    type: types.uiCloseModal    
});

export const eventAddNewCountry = (event)=> ({
    type: types.eventAddNewCountry,
    payload: event
});

 const eventPostHotel = (event)=> ({
    type: types.eventAddNewCountry,
    payload: event
});

export const eventHotelGet = (event)=>{
    localStorage.setItem('Hotels',JSON.stringify(event));
    return{type: types.eventAddNewCountry,
        payload: event}
} 


export const eventDeleted = () => ({ type: types.eventDeleted });

export const evenModaltDeleted = () => ({ type: types.modalDelete });

export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent });

export const eventLogout =() => ({ type: types.eventLogout });
