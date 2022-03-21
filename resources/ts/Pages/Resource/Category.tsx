import React,{ useState } from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import Authenticated from '@/Layouts/Authenticated';
import axios from 'axios';
import { IProps } from '@/hooks';
import SelectCategory from './SelectCategory';

export interface IPic {
    webformatURL: string,
}


const Category:React.FC<IProps> = (props) => {
    const [value, setValue] = useState<string | undefined>();
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
            setPictures(response.data.hits);
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
          header={
              <h2>Create Cateogry</h2>
          }
        >
       {boolean &&  <SelectCategory
        category={category}
        value={value}
        boolean={boolean}
        handleClose={handleClose}
        />}
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>
           <Button
           onClick={handleClick}
           variant='contained'
           >
               Click
           </Button>
           <PictureWrapper>
                {pictures?.map((picture) => (
                  <ImgCard>
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

const ImgCard = styled.div`
  width: auto;
  padding: 5px;
  margin: 5px;
  border: 1px solid #d3cdd2;
  border-radius: 20px;
  background-color: #fff;

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
