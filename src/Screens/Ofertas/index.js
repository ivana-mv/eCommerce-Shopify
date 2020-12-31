import React from 'react';
import {Link} from 'react-router-dom';

const Ofertas = () => {
    return (
        <>
            <p>Esta es la pagina de ofertas</p>
            <a>
            <Link to={"/"}>Volver al Home</Link>
            </a>
        </>
    )
}

export default Ofertas;