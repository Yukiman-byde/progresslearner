import { IProps } from '@/hooks'
import styled from 'styled-components';
import React from 'react'
import Avatar from '@mui/material/Avatar';
import { NewButton } from './NewButton';


const NewHeader:React.FC<IProps> = ({auth, errors, children}) => {

    const handleBack = () => {
        window.location.href="/index";
    }

  return (
    <Wrapper>
        <>
            <NewButton
            type="a"
            onClick={handleBack}
            >
                Back
            </NewButton>
        </>
            <h1>{children}</h1>
        <div className='info'>
            <h2>{auth.user.name}</h2>
        <Avatar src={auth.user.myAvatar}/>
       </div>
    </Wrapper>
  )
}

export default NewHeader

const Wrapper = styled.div`
padding:0 30px;
 justify-content: space-between;
 position: relative;
 width: 100%;
 height: 80px;
 border-bottom:  1px solid gray;
 box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
 align-items: center;
 display: flex;
 background-color: rgba(0, 0, 0, 0.1);

 h1 {
     font-size: 40px;
     font-weight: bold;
     text-transform: uppercase;
    }

 .info {
     display: flex;
     justify-content: space-evenly;
     width: 13%;
     align-items: center;

     h2 {
         font-size: 20px;
     }
 }
 `;

// const Header = styled.div`
// position: relative;
// width: 100%;
// height: 100%;
//     .color {
//         position: absolute;
//         filter: blur(40px);
//     }

//     .color:nth-child(1) {
//         top: 0;
//         left: 0;
//         width: 100px;
//         height: 20px;
//         background-color: #4151e0;
//     }


//     .color:nth-child(2) {
//         right: 0;
//         bottom: 10px;
//         width: 100px;
//         height: 20px;
//         background-color: #51e041;
//     }
//`;

