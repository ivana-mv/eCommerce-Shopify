import React from 'react';
import HomeContainer from '../../components/HomeContainer/HomeContainer';
import './Home.scss';

const Home = () => {



    return (
        <div>
            <h1 className="home-titulo">Shoppify</h1>
            <p className="home-subtitulo">Encuentra lo que necesites</p>
            <HomeContainer></HomeContainer>
        </div>
    )
}

export default Home;