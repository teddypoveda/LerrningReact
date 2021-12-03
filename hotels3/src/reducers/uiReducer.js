import { types } from "../types/types";

const initialState = {
    modalOpen: false,
}



export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.uiOpenModalHotel:
            return {
                ...state,
                modalOpen: true,
                typeModal:"hotel"
            }
        case types.uiOpenModalCountry:
            return {
                ...state,
                modalOpen: true,
                typeModal:"country"
            }

        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }
    
        default:
            return state;
    }


}