import React from 'react';
import rsz_rocket from '../../img/rsz_rocket.jpg'
import useAppContext from '../../Context/useAppContext';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import './CartIcon.scss';

export default function Icon() {

    const { productQuantity } = useAppContext()

    return(
        <>  
             <Link to={'/Cart'}>
                  <Button className= "button-cart" variant="primary">Mi Carrito</Button>
                </Link>
        <img src={rsz_rocket} alt="Icon-rocket"></img>
        <h1 className="totales">{ productQuantity() }</h1>
        </>
    )
} 
