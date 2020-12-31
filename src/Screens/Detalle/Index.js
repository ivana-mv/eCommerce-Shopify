import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';

const Detalle = () => {
    const { parametro } = useParams();

    useEffect(() => {
        console.log(parametro);
    }, [parametro])


    return (
        <div>
            <ItemDetailContainer></ItemDetailContainer>
            <h1>Recibiendo {parametro}</h1>
            <a>
            <Link to={'/'}>
                *Volver a la home
            </Link>
            </a>
        
        </div>



    )



}

export default Detalle;