import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import GallerieHome from '../components/GallerieHome';

function Home(props) {
    return (
        <Fragment>
            <GallerieHome/>
            <Footer/>
        </Fragment>
    );
}

export default Home;