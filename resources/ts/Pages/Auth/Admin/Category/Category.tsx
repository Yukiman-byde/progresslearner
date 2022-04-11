import React,{ useState } from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import Authenticated from '@/Layouts/Authenticated';
import axios from 'axios';
import { IProps } from '@/Pages/Auth/hooks';
import SelectCategory from './SelectCategory';
import { NewButton } from '@/NewComponents/NewButton';

export interface IPic {
    webformatURL: string,
}

interface IBool {
    bool: boolean
}


const Category:React.FC<IProps> = (props) => {
    const [value, setValue] = useState<string | undefined>();
    const [scale, setScale] = useState<boolean>(false);
    const [pictures, setPictures] = useState<IPic[]>([]);
    const [category, setCategory] = useState<string | undefined>();
    const [boolean, setBoolean] = useState<boolean>(false);

    const handleClick = () => {
        axios.get('https://pixabay.com/api', {
            params: {
                key: process.env.MIX_PIXABY_KEY,
                q: value,
                image_type: 'photo',
                per_page: 9,
            }
        }).then((response) => {
            setScale(false);
            setPictures(response.data.hits);
            setScale(true);
        });
    }

    const handleDetail = (picture: IPic) => {
        setCategory(picture.webformatURL);
        setBoolean(true);
    }

    const handleClose = () => {
        setBoolean(false);
    }


    return(
        <Authenticated
          auth={props.auth}
          errors={props.errors}
        >
       {boolean &&  <SelectCategory
        category={category}
        value={value}
        boolean={boolean}
        handleClose={handleClose}
        />}
        <InputZone>
            <input className="input" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>
            <NewButton
            className="newbutton"
            onClick={handleClick}
            color="#afeeee"
            >
                Click
            </NewButton>
        </InputZone>
           <PictureWrapper>
                {pictures?.map((picture) => (
                  <ImgCard bool={scale}>
                    <img src={picture.webformatURL}/>
                    <button
                    onClick={()=>handleDetail(picture)}
                    >Select</button>
                  </ImgCard>
                ))}
           </PictureWrapper>
        </Authenticated>
    );
}

export default Category


const PictureWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-items: center;

  img {
      width: calc(25% - 22px);
      display: block;
      margin: 10px;
      width: 350px;
      height: 200px;
  }
`;

const InputZone = styled.div`
   width: 30%;
   margin: 0 auto;
   position: relative;
   height: 40vh;
   background-color: whitesmoke;
   border-radius: 30px;
   margin-top: 30px;

   .input {
       border: 1px solid paleturquoise;
       position: absolute;
       top: 50px;
       left: 50%;
       transform: translateX(-50%);
       margin: 0 auto;
       transition: .5s;
   }

   .input:hover {
       box-shadow: 5px 3px 3px paleturquoise,5px 3px 3px paleturquoise;
   }

   .newbutton {
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translateX(-50%);
   }
`;

const ImgCard = styled.div<IBool>`
  width: auto;
  padding: 5px;
  margin: 5px;
  border: 1px solid #d3cdd2;
  border-radius: 20px;
  background-color: #fff;
  transition: .5s;
  transform: ${({bool}) => bool? 1 : 0.4};

button
{
        width: auto;
        height: auto;
        border-radius: 20px;
        background-color: paleturquoise;
        padding: 2px 10px;
        color: #fff;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        transition: .7s;

    &:hover {
            color: #000;
            box-shadow:1px 1px 10px paleturquoise;
        }

    &:nth-child(2n+1)
    {
        width: auto;
        height: auto;
        border-radius: 20px;
        background-color: rebeccapurple;
        padding: 2px 10px;
        color: #fff;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        transition: .7s;
    }
}
`;
