import React from 'react';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './Item.scss';

//Json de productos en forma de función para llamarlo en mi home
const Item = ({item}) => {
////item para HOME!!!!!!


  return (
    <>


     <div className="cards">
      <Card className="card-each" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.imagen_link} />
                            <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.descripcion}</Card.Text>
                            <Card.Text>Precio: $ {item.precio}</Card.Text>
                            <Link to={'/Detalle/'+item.id}>
                               <Button  variant="primary">Detalle</Button>
                            </Link>
                            </Card.Body>
                       </Card>
      </div>
    
      
    </>

  )
}

export default Item