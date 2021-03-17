import React from 'react';

function CaseGallerieService(props) {
    return (
        <div>
            <i className={props.link}></i>
            <h4>{props.nom}</h4>
            <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vero ipsa temporibus, inventore voluptates accusantium.</p>
            <h6>${props.prix}</h6>
        </div>
    );
}

export default CaseGallerieService;