import React from 'react';
import { useEffect, useState } from 'react';
import './ItemList.scss';
import Item from '../Item/Item';

const ItemList = ({ items }) => {

    return(
        <>
        {items.map((item, idx) => {
            return (
                <Item  key={idx} item= {item}></Item>
            )
        })}
        </>
    )
}

export default ItemList