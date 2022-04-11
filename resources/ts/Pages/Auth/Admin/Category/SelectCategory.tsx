import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import CompleteInfo from './CompleteInfo';
import { stringify } from 'querystring';

interface ICategory {
    category?: string | undefined,
    value?: string | undefined,
    boolean: boolean,
    handleClose: () => void;
}

const SelectCategory:React.FC<ICategory> = ({category, value, boolean, handleClose}): JSX.Element => {
   const [complete, setComplete] = useState<boolean>(false);

   const [name, setName] = useState<string | undefined>("");

   const [eName, setEName] = useState<string | undefined>("");

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
       setName(event.target.value);
   }

   const handleEChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setEName(event.target.value);
   }

   const closeDialog = () => {
        setComplete(false);
   }

   const handlePost = () => {
     if(name && eName) {
       const data = {
         category: name,
         English_category: eName,
         image: category
        }
        axios.post('/admin/update_categories', data).then((response) => {
            if(response.data == '200'){
               const result = confirm('成功しました');
               if( result ) {
                setComplete(true);
               }
            } else alert(response.data);
        }).catch((error) => console.log(error.message));
     }
       else if (!name)
       {
      alert('please write correctly category name');
       } else if (!eName)
       {
      alert('please write correctly category name in English');
       }
   }


  return (
    <DialogStyled
     onClose={handleClose}
     open={boolean}>
         {complete &&
         <CompleteInfo
           buttonTitle="Create Category from scratch"
           />}
        <Paper elevation={10}>
            <img src={category}/>
            <input
             type="text"
             placeholder="type category's name"
             onChange={handleChange}
             value={name}
             />
            <input
             type="text"
             placeholder="type category's name in English"
             onChange={handleEChange}
             value={eName}
             />
             <div>
                <button
                onClick={handlePost}
                >Decide</button>
                <button
                onClick={handleClose}
                >Cancel</button>
             </div>
        </Paper>
    </DialogStyled>
  )
}

export default SelectCategory

const DialogStyled = styled(Dialog)`
    text-align: center;
    align-items: center;
    justify-content: center;

  .MuiPaper-root {
    width: 600px;
    height: 700px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
  }

  img {
      width: 600px;
      position:relative;
      top: 0;
      left: 0;
      height: 450px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
  }

  input {
      margin: 0 auto;
      margin-top: 50px;
      border: 1px solid paleturquoise;
      height: 50px;
      width: 300px;
      border-radius: 20px;
      transition: 1s;
  }

  input:hover {
      box-shadow: 1px 1px 10px paleturquoise;
  }

  input:focus {
    outline: 0;
    box-shadow: 1px 1px 10px paleturquoise;
  }

  input:focus:not(:focus-visible) {
    outline: 0;
    }

  input:nth-child(2) {
      margin: 0 auto;
      margin-top: 50px;
      border: 1px solid paleturquoise;
      height: 50px;
      width: 300px;
      border-radius: 20px;
      transition: 1s;
  }

  input:nth-child(2):hover {
      box-shadow: 1px 1px 10px paleturquoise;
  }

  input:nth-child(2):focus {
    outline: 0;
    box-shadow: 1px 1px 10px paleturquoise;
  }

  input:nth-child(2):focus:not(:focus-visible) {
    outline: 0;
    }

  div {
      width: 100%;
  }


  button {
      padding: 5px;
      text-align: center;
      text-transform: uppercase;
      margin: 20px 5px 10px 10px;
      width: 130px;
      height: 50px;
      background-color: #0f0;
      border-radius: 10px;
  }

  button:nth-child(2){
      filter: hue-rotate(80deg);
  }

`;
