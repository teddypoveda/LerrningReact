//import moment from 'moment';

import { types } from '../types/types';

const initialState = {
    countries: [{
        id:'7',
        name:'Bahamas',
        shortName:'BH'
    }],
    activeEvent: null
};


export const countryReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.eventAddNew:
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
