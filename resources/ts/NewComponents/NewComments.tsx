import React from 'react'
import styled from 'styled-components';

type Props = {
    boolean: boolean,
    index: number,
    title?: string,
    img?: string,
    description?: string,
}

function NewComments<Props>({boolean, index}) {
  return (
    <>
      {boolean && 
        <CommentsWrapper>

        </CommentsWrapper>
      }
    </>
  )
}

export default NewComments

const CommentsWrapper = styled.div`
        position: absolute;
        top: 50px;
        left: 0;
        width: 200px;
        height: 100px;
        background: #f9f9f9;

        &::before {
        content: '';
        position: absolute;
        top: -30px;
        left: 0;
        width: 30px;
        height: 40px;
        border-bottom: 20px solid #f9f9f9;
        border-top: 20px solid transparent;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
    }
`;
