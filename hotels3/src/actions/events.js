import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";



export const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearModal = () => ({ type: types.eventClearModal });

export const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventLoadingHotel = () =>{
    return async (dispatch) => {
        try {
            const resp = await fetchConToken('hotel?PageNumber=1&PageSize=5',{});
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

export const eventHotelGet = (event)=> ({
    type: types.eventHotelGet,
    payload: event
});


export const eventDeleted = () => ({ type: types.eventDeleted });


