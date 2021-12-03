import { types } from '../types/types';

    // id:'',
    // country:'',
    // name:'',
    // address:'',
    // rating:'',
    // countryId:''


const initialState = {
    hotels: [],
    activeEvent: null
};


export const hotelReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        

        
        case types.eventAddNewHotel:
            return {
                ...state,
                hotels: [
                    ...state.hotels,
                    action.payload
                ]
            }

        case types.eventHotelGet:
            return {
                ...state,
                hotels: [
                    ...state.hotels,
                    action.payload
                ]
            }



        case types.eventUpdated:
            return {
                ...state,
                events: state.hotels.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            }
        
        case types.eventDeleted:
            return {
                ...state,
                events: state.hotels.filter(
                    e => ( e.id !== state.activeEvent.id )
                ),
                activeEvent: null
            }
        case types.eventLogout:
            return {
                ...initialState
            }

        default:
            return state;
    }


}
