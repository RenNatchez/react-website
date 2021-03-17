import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import GalerieGalerie2 from '../components/GalerieGalerie2';

function Gallery2(props) {
    return (
        <Fragment>
            <section className="galerie">
            <h1>Portrait Gallery 2</h1>
            <GalerieGalerie2/>
            </section>

            <Footer/>
        </Fragment>
    );
}

export default Gallery2;