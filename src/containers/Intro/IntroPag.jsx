import React, { useState } from 'react';
import IntroComponent from '../../components/Intro/IntroComponent';
import muscleOne from '../../img/Img-Bg.png';
import muscleTwo from '../../img/ImgBg2.png';
import muscleThree from '../../img/Img-Bg3.png';
import { ButtonNext, DivCenterBlue } from '../../style/StyleComponentsG';

let contador = 0;

const IntroPag = () => {
    const [ muscle, setMuscle ] = useState( muscleOne );
    const [ titles, setTitles ] = useState( 'Workout' );
    const [ desc, setDesc ] = useState( 'Start training with usand build muscle or lose weight' );

    const handleClick = () => {
        switch ( contador ) {
            case 0:
                contador++;
                setMuscle(muscleTwo);
                setTitles( 'Discipline' );
                setDesc( 'Develop discipline in yourself train every day' );
            break;
            
            case 1:
                contador++;
                setMuscle(muscleThree);
                setTitles( 'Character' );
                setDesc( 'Cultivate in you an iron character for training' );
            break;

            default:
                window.location.href = '/login';
            break;
        }
    }

    return (
        <DivCenterBlue>
            <IntroComponent imagen={ muscle } title={ titles } desc={ desc }/>
            <ButtonNext onClick={handleClick}>Next</ButtonNext>
        </DivCenterBlue>
        );
}

export default IntroPag;
