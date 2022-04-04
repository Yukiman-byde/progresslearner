import React from 'react';
import styled, {keyframes} from 'styled-components';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import { LineButton } from '../Components/LineButton';

export default function Guest({ children }) {
    return (
        <Wrapper>
          <Color1></Color1>
          <Color2></Color2>
          <Color3></Color3>
          <Color4></Color4>
          <BoxStyled>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="circle1"></div>
                <div className="circle2"></div>
            <Container>
                <div>
                   <h1><span>P</span>
                   rogress
                   <span>L</span>earner</h1>
                   <LineButton></LineButton>
                </div>
            </Container>
          </BoxStyled>
        </Wrapper>
    );
}

const animate = keyframes`
   0% {
       transform: translateY(30px);
   }

   50% {
       transform: translateY(0px);
   }

   100% {
       transform: translateY(30px);
   }
`;

const animateInverse = keyframes`
   0% {
       transform: translateY(-15px);
   }

   50% {
       transform: translateY(0px);
   }

   100% {
       transform: translateY(-15px);
   }
`;

const Wrapper = styled.div`
   position: relative;
   width: 100%;
   min-height: 100vh;
   justify-content: center;
   align-items: center;
   display: flex;
   background: #fff;
`;


const Color1 = styled.div`
    position: absolute;
    top: 0;
    left: 40%;
    transform: translateX(-50%);
    width: 70%;
    height: 50%;
    background-color: #40e0d0;
    filter: blur(150px);
`;

const Color2 = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 80%;
    height: 70%;
    background-color: #4151e0;
    filter: blur(150px);
`;

const Color3 = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 50%;
    background-color: #51e041;
    filter: blur(150px);
`;

const Color4 = styled.div`
    position: absolute;
    left: 0;
    bottom: 20%;
    width: 50%;
    height: 10%;
    background-color: #c826dd;
    filter: blur(150px);
`;

const BoxStyled = styled.div`
   position: relative;

   .box {
       position: absolute;
       backdrop-filter: blur(5px);
       border-radius: 20px;
       background: rgba(255, 255, 255, 0.1);
       box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
       border-top: 1px solid rgba(255, 255, 255, 0.2);
       border-left: 1px solid rgba(255, 255, 255, 0.2);
       transition-delay: 1s;
       animation: ${animate} 8s infinite ease-in-out;
   }

   .box:nth-child(1){
       top: 50px;
       left: -65px;
       height: 80px;
       width: 80px;
       z-index: 2;
   }

   .box:nth-child(2){
       bottom: 50px;
       right: -95px;
       height: 140px;
       width: 140px;
       z-index: 2;
       animation: ${animateInverse} 5s infinite ease-in-out;
   }

   .box:nth-child(3){
       top: -60px;
       right: 20px;
       height: 70px;
       width: 70px;
       z-index: 2;
       animation: ${animateInverse} 8s infinite ease-in-out;
   }

   .box:nth-child(4){
       bottom: -100px;
       right: 115px;
       height: 110px;
       width: 110px;
       z-index:3;
   }

   .circle1 {
       position: absolute;
       backdrop-filter: blur(5px);
       background: rgba(255, 255, 255, 0.1);
       top: -200px;
       right: -450px;
       border-bottom: 1px solid rgba(255, 255, 255, 0.2);
       border-left: 1px solid rgba(255, 255, 255, 0.2);
       width: 500px;
       height: 500px;
       border-radius: 50%;
       z-index: 1;
       box-shadow: inset 0 10px 10px #fff;
   }

   .circle2 {
       position: absolute;
       backdrop-filter: blur(5px);
       background: rgba(255, 255, 255, 0.1);
       bottom: -100px;
       left: -400px;
       border-bottom: 1px solid rgba(255, 255, 255, 0.2);
       border-left: 1px solid rgba(255, 255, 255, 0.2);
       width: 300px;
       height: 300px;
       border-radius: 50%;
       z-index: 1;
       box-shadow: inset 0 10px 10px rgba(255,255,255, 0.4);
       transform: rotate(220deg);
   }

`;


const Container = styled.div`
   position: relative;
   width: 400px;
   height: 400px;
   border-radius: 20px;
   background-color: rgba(255, 255, 255, 0.1);
   justify-content: center;
   text-align: center;
   display: flex;
   align-items: center;
   backdrop-filter: blur(5px);
   box-shadow: 0 25px 25px rgba(0,0,0,0.1);
   border-right: 1px solid rgba(255, 255, 255, 0.2);
   border-bottom: 1px solid rgba(255, 255, 255, 0.2);
   animation: ${animate} 10s infinite;
   z-index: 2;


   h1 {
       position: absolute;
       top: 0;
       left: 50%;
       transform: translateX(-50%);
       color: white;
       font-size: 30px;
       font-weight: bold;
       margin-top: 20px;
       letter-spacing: .2em;
   }

   span {
       color: #9826a7;
       margin-left: 2px;
   }
`;

