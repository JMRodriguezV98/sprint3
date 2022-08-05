import React from 'react';
import logo from '../img/Logo.png'
import { DivCenterBlue } from '../style/StyleComponentsG';
import { Link } from 'react-router-dom'

const CharguePag = () => {
    return (
        <DivCenterBlue>
            <Link to='/intro'>
                <img src={ logo } alt="Logo de la aplicacion, Buffalo App" />
            </Link>
            <p>Buffalo</p>
        </DivCenterBlue>
    );
}

export default CharguePag;
