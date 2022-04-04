import React from 'react'
import styled, {keyframes} from 'styled-components';

type Props = {
   char: string
}

function Title({char}: Props) {
  return (
      <Wrapper>
       <h1 data-text={char}>{char}</h1>
      </Wrapper>
  )
}

export default Title

const animate = keyframes`
  0%, 10%, 100% {
      width: 0;
  }

  30%, 70% {
      width: 100%;
  }
`;

const Wrapper = styled.div`
  h1 {
      position: relative;
      font-weight: normal;
      font-size: 30px;
      color: #fff;
      -webkit-text-stroke: 0.3px #51e041;
  }

  h1::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      color:  #51e041;
      border-right: 2px solid #40e0d0;
      overflow: hidden;
      animation: ${animate} 6s linear infinite;
  }
`;
