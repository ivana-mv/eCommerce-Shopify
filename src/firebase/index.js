import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp( {
        apiKey: "AIzaSyCtARV5GYg787UbXrqoQ-Vro4Ol7kJHJPc",
        authDomain: "ecommerce-2020-35.firebaseapp.com",
        projectId: "ecommerce-2020-35",
        storageBucket: "ecommerce-2020-35.appspot.com",
        messagingSenderId: "599751887659",
        appId: "1:599751887659:web:9ce0d7a5ccc63fb054136e",
        measurementId: "G-S08KQ17WCZ"
    }
)

export const getFirebase = () => {
    return app;
}

//base de datos
export const getFirestore = () => {
    return firebase.firestore();
}



//Crear órdenes de venta
//Insertar order