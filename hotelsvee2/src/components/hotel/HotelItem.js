import React from 'react'
import { Stack,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { uiOpenModalDelete,uiOpenModalHotelId } from '../../actions/ui';

//{id, country, name, address, rating, countryId}

export const HotelItem = (props) => {
    const dispatch = useDispatch();
    const Update = (hotel)=>(dispatch(uiOpenModalHotelId(hotel))); 
    const Delete = (guid)=>(dispatch(uiOpenModalDelete(guid))); 

    return (
        <div className="card animate__animated animate__bounce">
            <strong>{props.id}</strong>
            <p>{props.name}</p>
            <span>{props.address}</span>
            <p>{props.rating}</p>
            <p>{props.countryId}</p>
            <Stack gap={2} className="col-md-8 mx-auto">
                <Button size="sm" onClick={()=>Update(props)}>editar</Button>
                <Button variant="danger" size="sm" onClick={()=>Delete(props.id)}>eliminar</Button>
            </Stack>

        </div>
    )
}
