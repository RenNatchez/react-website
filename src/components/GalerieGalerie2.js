import React, { Fragment,useState } from 'react';
import CaseGalerie from './CaseGalerie';

function GalerieGalerie2(props) {
    const [listeGalerie, setListeGalerie] = useState([
        {link:'./img/nature_small_2.jpg'},
        // ------------
        {link:'./img/nature_small_1.jpg'},
        // ------------
        {link:'./img/nature_small_3.jpg'},
        // ------------
        {link:'./img/nature_small_6.jpg'},
        // ------------
        {link:'./img/nature_small_8.jpg'},
        // ------------
        {link:'./img/nature_small_1.jpg'},
        // ------------
        {link:'./img/nature_small_2.jpg'},
        // ------------
        {link:'./img/nature_small_9.jpg'},
        // ------------
        {link:'./img/nature_small_3.jpg'},
        // ------------
        {link:'./img/nature_small_5.jpg'},
        // ------------
        {link:'./img/nature_small_8.jpg'},
        // ------------
        {link:'./img/nature_small_9.jpg'},
        // ------------
        {link:'./img/nature_small_1.jpg'},
        // ------------
        {link:'./img/nature_small_6.jpg'},
        // ------------
        {link:'./img/nature_small_4.jpg'},
        // ------------
        {link:'./img/nature_small_2.jpg'},
        // ------------
        {link:'./img/nature_small_3.jpg'},
        // ------------
        {link:'./img/nature_small_4.jpg'},
        // ------------
        {link:'./img/nature_small_5.jpg'},
        // ------------
        {link:'./img/nature_small_6.jpg'},
        // ------------
        {link:'./img/nature_small_7.jpg'},
        // ------------
        {link:'./img/nature_small_8.jpg'},
        // ------------
        {link:'./img/nature_small_9.jpg'},
        // ------------
        {link:'./img/nature_small_1.jpg'},
        // ------------
        {link:'./img/nature_small_2.jpg'},
        // ------------
        {link:'./img/nature_small_3.jpg'},
        // ------------
        {link:'./img/nature_small_4.jpg'},
        // ------------
        {link:'./img/nature_small_5.jpg'},
        // ------------
        {link:'./img/nature_small_9.jpg'},
        // ------------
        {link:'./img/nature_small_8.jpg'},
        // ------------
        {link:'./img/nature_small_7.jpg'},
        // ------------
        {link:'./img/nature_small_6.jpg'},
        // ------------
        {link:'./img/nature_small_5.jpg'},
        // ------------
        {link:'./img/nature_small_4.jpg'},
        // ------------
        {link:'./img/nature_small_3.jpg'},
        // ------------
        {link:'./img/nature_small_2.jpg'},
        // ------------
    ]) 

    return (
        <div>
            {listeGalerie.map((el,i) =>{
                return(
                    <CaseGalerie link={listeGalerie[i].link} />
                    )
                })
            }

        </div>
    );
}

export default GalerieGalerie2;