import React, { Fragment,useState } from 'react';
import CaseGalerieHome from './CaseGalerieHome';

function GallerieHome(props) {
    const [listeGalerie, setListeGalerie] = useState([
        {nom:'Nature',
        link:'./img/img_1.jpg',
        navlinke:'/gallery1'},
        // ------------
        {nom:'Portrait',
        link:'./img/img_2.jpg',
        navlinke:'/gallery2'},
        // ------------
        {nom:'People',
        link:'./img/img_3.jpg',
        navlinke:'/gallery1'},
        // ------------
        {nom:'Architecture',
        link:'./img/img_4.jpg',
        navlinke:'/gallery2'},
        // ------------
        {nom:'Animals',
        link:'./img/img_5.jpg',
        navlinke:'/gallery1'},
        // ------------
        {nom:'sports',
        link:'./img/img_6.jpg',
        navlinke:'/gallery2'},
        // ------------
        {nom:'Travel',
        link:'./img/img_7.jpg',
        navlinke:'/gallery1'},
        // ------------
        {nom:'People',
        link:'./img/img_3.jpg',
        navlinke:'/gallery2'},
        // ------------
        {nom:'Architecture',
        link:'./img/img_4.jpg',
        navlinke:'/gallery1'},
    ]) 
    console.log(listeGalerie[1])
    return (
        <section>
         {listeGalerie.map((el,i) =>{
          return(
            <CaseGalerieHome navlink={listeGalerie[i].navlinke} nom={listeGalerie[i].nom} urlImg={listeGalerie[i].link}/>
          )
        })
        }
        </section>
    );
}

export default GallerieHome;