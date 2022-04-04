import { Button } from '@mui/material';
import React, {useRef} from 'react'

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

// nth-childの理解
// box-shadow
// transition-delay
// import styled from 'styled-components';
// import React, { useState, useRef } from 'react';

// function Practice(){
//    let ImgRef = useRef<HTMLImageElement | null>(null);

//    let CircleRef = useRef() as React.MutableRefObject<HTMLDivElement>;

//    const imgSlider = (picture: string) => {
//        if(ImgRef.current){
//            ImgRef.current.src = picture;
//        }
//    }

//    const ChangeColorOfCircle = (color: string) => {
//         CircleRef.current.style.background = color;
//    }

//   return(
//     <Section>
//         <Circle ref={CircleRef}></Circle>
//         <header>
//             <a href="#" className="logo"><img src="/images/logo.png"/></a>
//             <ul>
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">What's News</a></li>
//                 <li><a href="#">Menu</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>
//         </header>
//             <Content>
//                 <div>
//                     <h2>It's not just a coffee <br/>It's<span>Starbucks</span></h2>
//                     <p>Here's text comingHere's text comingHere's text comingHere's text comingHere's text comingHere's text comingHere's text comingHere's text comingHere's text comingHere's text comingHere's text comingHere's text comingHere's text comingHere's text comingHere's text coming</p>
//                     <a href="#" className="aTag">Learn more</a>
//                 </div>
//                 <ImgBox>
//                     <img ref={ImgRef} src="/images/img1.png"/>
//                 </ImgBox>
//                 <Thumb>
//                     <li><img
//                      onClick={() => {
//                          imgSlider("/images/img1.png"),
//                          ChangeColorOfCircle("#017143")
//                         }}
//                      src="/images/img1.png"/></li>
//                     <li><img
//                      onClick={() => {
//                          imgSlider("/images/img2.png"),
//                          ChangeColorOfCircle("#eb7495")
//                          }} src="/images/img2.png"/></li>
//                     <li><img
//                      onClick={() => {
//                          imgSlider("/images/img3.png"),
//                          ChangeColorOfCircle("#d752b1")
//                     }}
//                      src="/images/img3.png"/></li>
//                 </Thumb>
//             </Content>
//             <Sci>
//                 <li><a href="#"><img src="/images/facebook.png"/></a></li>
//                 <li><a href="#"><img src="/images/twitter.png"/></a></li>
//                 <li><a href="#"><img src="/images/instagram.png"/></a></li>
//             </Sci>
//     </Section>
//   );
// }

// export default Practice;

// const Section = styled.section`
//   position: relative;
//   width: 100%;
//   min-height: 100vh;
//   padding: 100px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #fff;

//   header {
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       padding: 20px 100px;

//         img {
//         position: relative;
//         max-width: 80px;
//         }

//         ul {
//             position: relative;
//             display: flex;
//         }

//         li {
//             list-style: none;
//         }

//         a {
//             display: inline-block;
//             color: #333;
//             font-weight: 400;
//             margin-left: 30px;
//             text-decoration: none;
//         }
//     }


// `;

// const Content = styled.div`
//   position: relative;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   div {
//       position: relative;
//       max-width: 600px;

//       h2 {
//           color: #333;
//           font-size: 4em;
//           line-height: 1.4em;
//           font-weight: 500;
//         }

//       span {
//           color: #017143;
//           font-size: 1.2em;
//           font-weight: 900;
//         }

//       p {
//           color: #333;
//       }

//       .aTag {
//           display: inline-block;
//           margin-top: 20px;
//           padding: 8px 20px;
//           background-color: #017143;
//           color: #fff;
//           border-radius: 40px;
//           font-weight: 500;
//           letter-spacing: 1px;
//           text-decoration: none;
//       }

//   }
// `;

// const ImgBox = styled.div`
//    width: 600px;
//    display: flex;
//    justify-content: flex-end;
//    padding-right: 50px;
//    margin-top: 50px;

//    img {
//       max-width: 350px;
//    }
// `;

// const Thumb = styled.ul`
//   position: absolute;
//   left: 50%;
//   bottom: 20px;
//   transform: translateX(-50%);
//   display: flex;
//   align-items: center;

//   li {
//       list-style: none;
//       display: inline-block;
//       margin: 0 20px;
//       cursor: pointer;
//       transition: 0.5s;
//     &:hover {
//         transform: translateY(-15px);
//     }
//   }

//   img {
//       max-width: 60px;
//   }
// `;


// const Sci = styled.ul`
//    position: absolute;
//    top: 50%;
//    right: 30px;
//    transform: translateY(-50%);
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    flex-direction: column;

//    li {
//        list-style: none;

//        a {
//            display: inline-block;
//            margin: 5px 0;
//            transform: scale(0.8);
//            filter: invert(1);
//        }
//    }
// `;

// const Circle = styled.div`
// position: absolute;
// top: 0;
// left: 0;
// width: 100%;
// height: 100%;
// background: #017143;
// clip-path: circle(600px at right 800px);
// `;


