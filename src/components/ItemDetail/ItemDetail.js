import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import useAppContext from '../../Context/useAppContext'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './ItemDetail.scss';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {

      const [quantity, setCounter] = useState(1)
      const {addProduct} = useAppContext();

      const handleCounter = (counter) => {
        setCounter(counter)
      }

      const addProductToCart = () => {
        addProduct(product, quantity);
        console.log({...product, quantity});
      }

      /*
        const [product] = products;

        const mostrarConsola = (contador) => {
            console.log(contador)
        }
        
        const actualizar = (contador) => {
          console.log(contador)
        }

        const { dummyObject, handleDummyObject } = useAppContext()

        const handleProduct = () => {
          handleDummyObject(product);
          }
        */
          

  return (
    <>
            <h1 className="producto-titulo">{product.name}</h1>

          <div>
          <Link to={'/'}>
            <Button className = "boton-home" variant= "danger">Volver al Home</Button>
          </Link>
          </div>

            <Card className="text-center card-detail">
              <Card.Header>Detalle</Card.Header>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Img class="img-fluid" variant="top" src={product.imagen_link} />
                <h6 class="card-subtitle mb-2 text-muted">Descripción</h6>
                <Card.Text>{product.descripcion}</Card.Text>
                <h6 class="card-subtitle mb-2 text-muted">Financiación</h6>
                <Card.Text>{product.financ}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">Shoppify</Card.Footer>
            <div className="botones">
              <Button className="comprar" onClick={handleCounter} variant="success">Comprar</Button>
              <Button className="agregar" onClick={addProductToCart} variant = "warning">Agregar al carrito</Button>
            </div>
            </Card>

      <ItemCount onAdd={handleCounter} initialValue={0} maxValue={15}></ItemCount>

    </>

  )
}

export default ItemDetail


