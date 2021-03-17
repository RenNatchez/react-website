import React, { Fragment } from 'react';
import FooterFixed from '../components/FooterFixed';
import GalerieServices from '../components/GalerieServices';

function Services(props) {
    return (
        <Fragment>
            <section className="service">
                <h1>My Services</h1>
                <GalerieServices/>
            </section>
            <FooterFixed/>
        </Fragment>
    );
}

export default Services;