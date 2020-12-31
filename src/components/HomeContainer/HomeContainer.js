import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../firebase/data';
import { useParams } from 'react-router-dom';

//Llamado a la promise que devuelve un listado de productos para la Home

const HomeContainer = () => {

    const [items, setItems] = useState([]) //El setState recibe un array
    const [prodCat, setProdCat] = useState([])
    const { type = null } = useParams();

    useEffect(() => { //espero que me devuelva la respuesta 
        getProducts()
            .then(response => {
                setItems(response)
         }, 
            err => {
             console.error(err)
         })
            .catch(err=> {
             console.log(err)
         })
            .finally(()=> {})
    }, [])


    useEffect(() => {
        if (type) {
            setProdCat(filterby())
        }
    }, [type])

    console.log(prodCat, type);


    const filterby = () => {
            return items.filter(prodCat => prodCat.categoria === type);
        }

        return (
            <>
                <ItemList items={type ? prodCat : items}></ItemList> 
            </>
        )
    


//Le paso por props el items array a ItemList
/*
    return (
        <>
            <ItemList items={type? prodCat : items}></ItemList> 
        </>
    )
    */

}

export default HomeContainer;