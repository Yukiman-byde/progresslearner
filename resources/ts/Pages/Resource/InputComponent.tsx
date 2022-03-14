import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import styled from 'styled-components';

interface IProps {
    placeholder: string,
    setKeyword: React.Dispatch<React.SetStateAction<string>>,
    handleClick: () => void,
    title?: string,
}

const InputComponent = ({placeholder, setKeyword, handleClick, title}: IProps) => {

  return (
    <Wrapper>
        <h1>{title}</h1>
        <TextareaAutosize
        onChange={(e) => setKeyword(e.target.value)}
        maxRows={3}
        style={{
         width: '90%',
         height: 100,
         borderRadius: 20,
         marginTop: 40,
        }}
        placeholder={placeholder}
        />
        <Button
         onClick={handleClick}
         variant="contained"
         >
             Start
        </Button>
    </Wrapper>
  )
}

export default InputComponent

const Wrapper = styled.div`
 width: 100%;
 height: auto;
 background-color: skyblue;
 border-left: 1px solid blueviolet;
 border-top: 1px solid blueviolet;
 border-right: 1px solid blueviolet;
 border-top-left-radius: 20px;
 border-top-right-radius: 20px;
 position: relative;

 h1 {
     position: absolute;
     padding: 10px;
     background-color: whitesmoke;
     border: 0.5px solid blue;
     width: 70%;
     border-radius: 30px;
     top: -20px;
     left: 15%;
     right: 15%;
 }
`;
