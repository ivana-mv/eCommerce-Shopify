import React from 'react';
import { Link } from 'react-router-dom';
import useAppContext from '../../Context/useAppContext';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './Cart.scss';

export default function Cart() {

    const { products } = useAppContext()

    return(
        <>
        <Link to={'/'}>
        <Button className = "boton-home" variant= "primary">Volver al Home</Button>
        </Link>
        {products.map((products, idx) => {
            return (
            <>

                <Modal.Dialog className= "modal-carrito">
                    <Modal.Header closeButton>
                        <Modal.Title>{products.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Cantidad: {products.quantity} </p>
                        <p><mark>Subtotal:</mark>{products.precio}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Eliminar del Carrito</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </>
            )
        })}
        </>
    )
}