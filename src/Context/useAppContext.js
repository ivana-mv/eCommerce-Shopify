import React, {createContext, useContext, useState, useEffect} from 'react';
//import {getProductsbyCategory} from '../firebase/data';
//import { useParams } from 'react-router-dom';

const AppContext = createContext() 
const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {

   // const {id} = useParams();

    const [products, setProducts] = useState([]);


    //Add product to cart
    const addProduct = (product, quantity) => {
        const existingProduct = products.find((prod) => prod.id === product.id);

        if(existingProduct){
            existingProduct.quantity += quantity;
            setProducts([...products]);
        }
        else {
            setProducts([...products, { ...product, quantity }]);
            }
    }


    const productQuantity = () => {
        return products.reduce((acc, product) => (acc += product.quantity), 0);
    }



    return <AppContext.Provider value= {{ products, productQuantity, addProduct }}>
        {children}
    </AppContext.Provider>

}

export default useAppContext
