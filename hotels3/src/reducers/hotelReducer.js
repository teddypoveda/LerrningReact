import { types } from '../types/types';

const initialState = {
    hotels: [{
        id:'',
        country:'',
        name:'',
        address:'',
        rating:'',
        countryId:''
    }],
    activeEvent: null
};


export const hotelReducer = ( state = initialState, action ) => {

    switch ( action.type ) {


        
        case types.eventAddNewHotel:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }

        case types.eventHotelGet:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }


        case types.eventClearModal:
            return {
                ...state,
                activeEvent: null
            }


        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            }
        
        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter(
                    e => ( e.id !== state.activeEvent.id )
                ),
                activeEvent: null
            }

        default:
            return state;
    }


}
