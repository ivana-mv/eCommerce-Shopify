import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './itemCount.scss';


export default function CountItem ({initialValue, maxValue, onAdd}){
    const [contador, setContador] = useState(initialValue);

    const incrementar = () => {
        setContador(Math.min(contador+1,maxValue));
        onAdd(contador+1);
}

    const decrementar = () => {
       setContador(Math.max(contador-1, initialValue));
    }


    return (
        <div className="contador">
            <p className="cont-text">Cantidad: {contador}</p>
            <Button variant="outline-dark" onClick={() => {decrementar()}}>-</Button>
            <Button variant="outline-dark" onClick={() => {incrementar()}}>+</Button>
       
        </div>
    );
}


