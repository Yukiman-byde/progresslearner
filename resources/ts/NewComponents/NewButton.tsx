import React from 'react'
import styled from 'styled-components';

type IChildren = {
    children: string,
    type?: string | undefined,
    color?: string,
    onClick?: () => void,
    className?: string,
}

export function NewButton({children, type, color, onClick, className}: IChildren) {
  return (
        <DefaultButton className={className} type={type} color={color} onClick={onClick}>
            <span>{children}</span>
        </DefaultButton>

  )
}

export const DefaultButton = styled.button.attrs((props) => {
    if(props.type){
        return {type:props.type = props.type}
    } else if(!props.type) {
        return {type: props.type = "button"}
    }
})`
   width: 150px;
   height: 50px;
   border-radius: 5px;
   background-color: transparent;
   color: #000;
   font-weight: 600;
   border: 1px solid ${({color}) => color? color: "red"};
   position: relative;
   align-items: center;
   justify-content: center;
   font-size: 500;
   display: flex;
   font-size: 1.2em;


    &:hover {
        color: #fff;
        font-weight: bold;
        transition: 0.8s;
        font-weight: 900;
        font-size: 1.2em;
    }

   &::before {
       content: '';
       position: absolute;
       top: 0;
       left: -2px;
       color: #333;
       transition: 0.8s;
       width: 1px;
       height: 50px;
   }

   &:hover::before {
       content: '';
       left: -2px;
       width: 130px;
       height: 50px;
       background-color: ${({color}) => color? color: "red"};
       color: #333;
       transition-delay: .8s .1s;
   }

   &::after {
       content: '';
       position: absolute;
       top: 0;
       right: -2px;
       transition: 0.8s;
       width: 1px;
       height: 50px;
   }

   &:hover::after {
       content: '';
       background-color: ${({color}) => color? color: "red"};
       right: -2px;
       width: 130px;
       height: 50px;
   }

   span {
       position: relative;
       z-index: 999;
   }

`;
