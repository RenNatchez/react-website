import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function CaseGalerieHome(props) {

    return (
        <div  className='card-home'>
            <div>
            <img src={props.urlImg}/>
            </div>
            <div className='text-info'>
                <h3>{props.nom}</h3>
                < NavLink to={props.navlink} exact activeClassName="nav-active">
                    More Photos
                </NavLink>
            </div>
        </div>
    );
}

export default CaseGalerieHome;