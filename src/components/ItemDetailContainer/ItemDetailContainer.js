import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';
import './ItemDetailContainer.scss';
import {getProductsbyId} from '../../firebase/data';

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({}) 


    useEffect(()=> {
        setLoading(true)
        setTimeout(()=>{
                getProductsbyId(id)
                    .then
                        (response => {
                            setProduct(response);
                            setLoading(false);
                },
                )}, 2000)
    }, [id]);

    console.log(product);

    return(
        <div id='ItemDetailContainer'>
            {loading ? <Spinner animation="border" role="status" className='spinner'>
                            <span className="sr-only">Loading...</span>
                        </Spinner>
            :
                <ItemDetail product = {product}></ItemDetail>
            }
        </div>
    )
}

export default ItemDetailContainer