import React, { Fragment,useState } from 'react';
import CaseGallerieService from './CaseGallerieService';

function GalerieServices(props) {
    const [listeService, setListeService] = useState([
        {nom:'Camera',
        link:"fas fa-camera",
        price: 29},
        // ------------
        {nom:'Wedding Photography',
        link:"fas fa-venus-mars",
        price: 46},
        // ------------
        {nom:'Animal',
        link:"fas fa-dragon",
        price: 24},
        // ------------
        {nom:'Portrait',
        link:"fas fa-image",
        price: 40},
        // ------------
        {nom:'Travel',
        link:"fas fa-monument",
        price: 35},
        // ------------
        {nom:'Video Editing',
        link:"fas fa-video",
        price: 15},
        // ------------
    ]) 
    return (
        <div className="gallerie-services">
            {listeService.map((el,i) =>{
                return(
                    <CaseGallerieService nom={listeService[i].nom} link={listeService[i].link} prix={listeService[i].price} />
                    )
                })
            }
        </div>
    );
}

export default GalerieServices;