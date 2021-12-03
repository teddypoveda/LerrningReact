import React from 'react'
import { ResourceModalCountry } from '../modal/ResourceModalCountry';
import { AddNewResource } from '../ui/AddNewResource';
import { DataTableCountry } from './DataTableCountry';



export const CountryScreen = () => {


    return (
        <>
            <h2>Paises</h2>
            <AddNewResource tipo="country"/>
            <DataTableCountry/>
            <ResourceModalCountry/>
        </>
    )
}
