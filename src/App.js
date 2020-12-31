import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/Navbar';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './Screens/Home/Index';
import { AppProvider } from './Context/useAppContext';
import Cart from './components/Cart/Cart';
import HomeContainer from './components/HomeContainer/HomeContainer';


function App() {
  return (
    <AppProvider>
      <BrowserRouter>
      <NavBar></NavBar>

        <Switch>
          <>
          <Route exact path= "/:type?">
            <HomeContainer></HomeContainer>
          </Route>

          <Route exact path= "/Cart">
            <Cart></Cart>
          </Route>

          <Route exact path= "/Detalle/:id">
            <ItemDetailContainer></ItemDetailContainer>
          </Route>
          </>
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

