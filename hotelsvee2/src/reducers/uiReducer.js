import { types } from "../types/types";

const initialState = {
    modalOpenHotel: false,
    modalOpenCountry: false,
    modalDelete:false,
    modalNew: true,
    idSelector:null,
    hotel:{id:'',
    country:'',
    name:'',
    address:'',
    rating:'',
    countryId:''}
}



export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.uiOpenModalHotel:
            return {
                ...state,
                modalNew:true,
                modalOpenHotel: true
            }
        case types.uiOpenModalCountry:
            return {
                ...state,
                modalOpenCountry: true
            }
        case types.uiOpenModalHotelId:
            return {
                ...state,
                modalOpenHotel: true,
                modalNew:false,
                hotel:action.hotelUpdate
            }
        case types.uiModalDelete:
            return {
                ...state,
                modalDelete: true,
                idSelector:action.idDelete
            }
        case types.uiModalDeleteClose:
            return {
                ...state,
                modalDelete: false
            }
        case types.uiCloseModal:
            return {
                ...state,
                modalOpenCountry: false,
                modalOpenHotel:false
            }
        case types.eventClearActiveEvent:
            return {
                ...state,
                hotel: {id:'',
                country:'',
                name:'',
                address:'',
                rating:'',
                countryId:''}
            }
    
        default:
            return state;
    }


}