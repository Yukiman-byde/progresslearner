import { DefaultButton, NewButton } from '@/NewComponents/NewButton'
import styled from 'styled-components'
import React, {useState, useRef, useEffect} from 'react'
import VanillaTilt from 'vanilla-tilt';
import { JSXElement } from '@babel/types';
import Title from '@/NewComponents/Title';

function Tilt(props){
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        if(tilt.current){
        VanillaTilt.init(tilt.current, options);
        }
      }, [options]);

      console.log(props);
   return <div ref={tilt} {...rest} />;
}


function Practice2() {

    const options = {
        scale: 1.2,
        speed: 1000,
        max: 30
      };

  return (
    <Wrapper1>
    are?
    <Title char="ALL_CSS"></Title>
    </Wrapper1>
  )
}

export default Practice2

const Wrapper1 = styled.div`
   margin: 0 auto;
   justify-content: center;
   display:flex;
   align-items: center;

   .box {
    width: 250px;
    height: 250px;
    border-radius: 12px;
    background-color: khaki;
    box-shadow: 0 5px 40px rgba(0, 0, 0, 0.2);
   }
`;

