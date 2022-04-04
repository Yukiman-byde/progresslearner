import React from 'react'
import styled from 'styled-components';
import CancelIcon from '@mui/icons-material/Cancel';

type IModal = {
  children: string,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

interface IOpen {
    open: boolean
}

function NewModal( {children, open, setOpen}: IModal) {
   const handleClose = () => {
       setOpen(!open);
   }

  return (
    <Wrapper open={open}>
        <div className="modal">
          {children}
          <CancelIconStyled onClick={handleClose}/>
        </div>
    </Wrapper>
  )
}

export default NewModal

const Wrapper = styled.div<IOpen>`
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    padding-top: 150px;
    display: ${({open}) => open? "inline-block": "none"};

     .modal {
        position: relative;
        background-color: #fefefe;
        margin: auto;
        padding: 30px;
        border: 1px solid gray;
        width: 50%;
        height: 50vh;
        border-radius: 30px;
     }
`;

const CancelIconStyled = styled(CancelIcon)`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;

