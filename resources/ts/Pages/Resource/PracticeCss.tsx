import styled, { keyframes } from 'styled-components';

const animate = keyframes`
   0%, 10%, 100% {
       width: 0;
   }

   70%, 90%{
       width: 100%;
   }
`;

export const Body = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   min-height: 100vh;

   /* h1 {
     position: relative;
     font-size: 14vh;
     color: #252839;
     -webkit-text-stroke: 0.3vw #383d52;
     font-family: 'Poppins', sans-serf;
     text-transform: uppercase;
  }

  h1::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      color: #0f0;
      -webkit-text-stroke: 0.3vw #383d52;
      border-right: 2px solid #0f0;
      overflow: hidden;
      animation: ${animate} 6s linear infinite;
  } */
`;

export const Container = styled.div`
  position: relative;
  top: 50px;

  .plate {
      position: absolute;
      bottom: -50px;
      left: 50%;
      transform: translateX(-50%);
      width: 500px;
      height: 200px;
      background: linear-gradient(to right, #f9f9f9, #e7e7e7);
      border-radius: 50%;
      box-shadow: 0 35px 35px rgba(0, 0, 0, 0.2);
  }

  .plate::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      border-radius: 50%;
      background: linear-gradient(to left, #f9f9f9, #e7e7e7);
  }

  .plate::after {
      content: '';
      position: absolute;
      top: 30px;
      left: 30px;
      right: 30px;
      bottom: 30px;
      background: radial-gradient(rgba(0, 0, 0, 0.2) 25%, transparent, transparent);
      border-radius: 50%;
  }
`;

export const Cup = styled.div`
 position: relative;
 width: 280px;
 height: 300px;
 background: linear-gradient(to right, #f9f9f9, #dcdcdc);
 border-bottom-left-radius: 45%;
 border-bottom-right-radius: 45%;

 .top {
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(to right, #f9f9f9, #d9d9d9);
    border-radius: 50%;

 }

 .vapour {
        position: relative;
        display: flex;
        z-index: 1;
        padding: 0 20px;
        width: 100%;
        height: 30px;
    }

   .vapour span {
        position: absolute;
        bottom: 50px;
        margin: 0 2px 50px;
        min-width: 8px;
        height: 120px;
        background-color: #fff;
        border-radius: 50%;
    }

 .circle {
     position: absolute;
     top: 5px;
     left: 10px;
     width: calc(100% - 20px);
     height: 50px;
     background: linear-gradient(to left, #f9f9f9, #d9d9d9);
     border-radius: 50%;
     box-sizing: border-box;
     overflow: hidden;
 }

 .tea {
     position: absolute;
     top: 20px;
     left: 0;
     width: 100%;
     height: 100%;
     background: linear-gradient(#c57e65, #e28462);
     border-radius: 50%;
 }

 .handle {
     position: absolute;
     right: -65px;
     top: 40px;
     width: 160px;
     height: 180px;
     border: 25px solid #dcdcdc;
     border-bottom: 25px solid transparent;
     border-left: 25px solid transparent;
     border-radius: 50%;
     transform: rotate(40deg);
 }
`;

export const Wrapper = styled.div`
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #F7F7F7;
`;

export const Loader = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
`;

export const SpanStyled = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(36 * 10));

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 25px;
        height: 25px;
        background-color: transparent;
        border: 4px solid #00eff0;
    }
`;


//first color: #7619f9;

