import React from 'react';
import { ActualForm, CircleForm, DivCenterBlue, DivCenterSphere, Pdesc, Ptitles } from '../../style/StyleComponentsG';

const IntroComponent = (props) => {
    return (
        <DivCenterBlue>
            <img src={ props.imagen } alt="Imagen de presentacion, hombre musculoso" style={styleImg.margenes}/>
            <Ptitles>{ props.title }</Ptitles>
            <Pdesc>{ props.desc }</Pdesc>
            <DivCenterSphere>
                <ActualForm></ActualForm>
                <CircleForm></CircleForm>
                <CircleForm></CircleForm>
            </DivCenterSphere>
        </DivCenterBlue>
    );
}

const styleImg = {
    margenes: {
        marginBottom: '30px' 
    },
}

export default IntroComponent;
