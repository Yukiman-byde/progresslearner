import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

type Props = {}

function Practice({}: Props) {
  return (
    <Body>
        <Wrapper>
          <a href="https://www.google.com/"><span>Read More</span></a>
          <a><span>Read More</span></a>
        </Wrapper>

    </Body>
  )
}

export default Practice

const Body = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  min-height: 100vh;
  background-color: #000;
`;

const Wrapper = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;

   a {
       position: relative;
       display: inline-block;
       padding: 15px 30px;
       border: 2px solid #0f0;
       margin: 40px;
       text-transform: uppercase;
       font-weight: 600;
       text-decoration: none;
       letter-spacing: 2px;
       color: white;
       -webkit-box-reflect: below 0px linear-gradient(transparent, #0005);
       transition: .5s;
       transition-delay: 0s;

       &:hover {
           transition-delay: 1.5s;
           color: #000;
           box-shadow: 0 0 10px #0f0,
           1px 1px  20px #0f0,
           1px 1px  40px #0f0,
           1px 1px 80px #0f0,
           1px 1px 160px #0f0;
       }

       &:nth-child(2){
           filter: hue-rotate(80deg);
       }

       &::before {
           content: '';
           position: absolute;
           left: -20px;
           top: 50%;
           transform: translateY(-50%);
           width: 20px;
           height: 2px;
           background: #0f0;
           box-shadow: 5px -8px 0 #0f0, 5px 8px 0 #0f0;
           transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
           transition-delay: 1s, 0.5s, 0s, 0s;
       }

       &:hover::before {
           width: 60%;
           height: 100%;
           left: -2px;
           box-shadow: 5px 0 0 #0f0, 5px 0 0 #0f0;
           transition-delay: 0s, 0.5s,1s, 1s;
       }

       &::after {
           content: '';
           position: absolute;
           right: -20px;
           top: 50%;
           transform: translateY(-50%);
           width: 20px;
           height: 2px;
           background: #0f0;
           box-shadow: -5px -8px 0 #0f0, -5px 8px 0 #0f0;
           transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
           transition-delay: 1s, 0.5s, 0s, 0s;
       }

       &:hover::after {
           width: 60%;
           height: 100%;
           right: -2px;
           box-shadow: -5px 0 0 #0f0, -5px 0 0 #0f0;
           transition-delay: 0s, 0.5s,1s, 1s;
       }

       span {
           position: relative;
           z-index: 100;
       }
   }

`;

//nth-childの理解
//box-shadow
//transition-delay

