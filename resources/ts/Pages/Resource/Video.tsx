import React, { useState, useContext } from 'react';
import { IYoutubeVideo, IVideo } from '@/hooks';
import Search_Base_Url from '../Youtube/YoutubeApi';
import { select } from './VideoInfo';
import { useAppDispatch } from '../hooks';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';


const Video:React.FC<IVideo> = (Props) => {
    const [descript, setDescript] = useState(Props.description);


    const handleSelect = (props: IVideo) => {
        console.log(props);
        dispatch(select({
            videoId: props.videoId,
            title: props.title,
            description: descript,
            thumbnail: props.thumbnail,
        }));
    }

    const dispatch = useAppDispatch()

    return (
        <>
        <Wrapper>
           <CardStyled>
               <CardContent>
                <IframeStyled
                src={`https://www.youtube.com/embed/${Props.videoId}`}
                >
                </IframeStyled>
                <h1>title : <span>{Props.title}</span></h1>
                <p>thumbnail : </p>
                <div style={{display: 'flex'}}>
                    <img src={Props.thumbnail}/>
                    <input
                    onChange={(e) => setDescript(e.target.value)}
                    type="textarea"
                    value={descript}/>
                </div>
                <Button
                     style={{marginLeft: 'auto', marginTop: 10}}
                     variant="contained"
                     color="secondary"
                     onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSelect(Props)}
                   >
                       Select
                </Button>
               </CardContent>
           </CardStyled>
        </Wrapper>
       </>
    );
}

export default Video;

const CardStyled = styled(Card)`
  width: 500px;
  height: 650px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 20px;

 h1 {
     font-weight: bold;
     font-size: 20px;
     color: gray;
     margin-top: 5px;
     margin-bottom: 5px;
 }

 img {
     width: 200px;
     height: 130px;
 }

 span {
     color: black;
 }

 p {
     margin-top: 5px;
     font-weight: normal;
     font-size: 20px;
 }

 input {
     margin-left: 10px;
     width: 100%;
     border: 1px solid whitesmoke;
 }
`;

const IframeStyled = styled.iframe`
  width: 450px;
  height: 350px;
  border-radius: 20px;
`;


const Wrapper = styled.div`
    margin-bottom: 30px;
`;
