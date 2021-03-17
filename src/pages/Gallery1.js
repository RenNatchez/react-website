import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import GalerieGalerie1 from '../components/GalerieGalerie1';

function Gallery1(props) {
    return (
        <Fragment>
            <section className="galerie">
            <h1>Portrait Gallery 1</h1>
            <GalerieGalerie1/>
            </section>

            <Footer/>
        </Fragment>
    );
}

export default Gallery1;