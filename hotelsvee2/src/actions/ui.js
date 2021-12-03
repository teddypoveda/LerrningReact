import { types } from '../types/types';



export const uiOpenModalHotel = () => ({ type: types.uiOpenModalHotel });
export const uiOpenModalHotelId = (hotel) => ({ type: types.uiOpenModalHotelId,hotelUpdate:hotel });
export const uiOpenModalCountry = () => ({ type: types.uiOpenModalCountry });
export const uiOpenModalDelete = (id) => ({ type: types.uiModalDelete, idDelete:id });
export const uiCloseModalDelete = () => ({ type: types.uiModalDeleteClose });
export const uiCloseModal = () => ({ type: types.uiCloseModal });