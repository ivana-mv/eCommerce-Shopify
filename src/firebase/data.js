import { getFirestore } from '../firebase';

export const getProducts = () => {
    return new Promise((resolve, reject) => {

        const products = getFirestore().collection("Productos");
        products.get().then((response) => {
            if(response.size === 0){
                 reject("Oops. Está vacío!!");
        }

        const data = response.docs.map((doc) => ({ ...doc.data(), id:doc.id}));

        resolve(data);
        });
})
}

export const getProductsbyId = (id) => {

    return new Promise((resolve, reject) => {

        const products = getFirestore().collection("Productos").doc(id);
        products.get().then((response) => {
            if(response.size === 0) {
                reject("empty");
            }

        const data = { ...response.data(), id:response.id }
        resolve(data);
        });

    }) 
}

