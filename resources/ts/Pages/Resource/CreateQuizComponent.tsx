import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React,{useState} from 'react';
import { IResult } from './Caluculate/VideoTime';
import axios from 'axios';
import {Video_Base_Url} from '../Youtube/YoutubeApi';
import styled from 'styled-components';
import VideoTime from './Caluculate/VideoTime';
import { Button } from '@mui/material';


interface IVideoID {
    id: number,
    videoId: string,
    VideoTime?: ()=>IResult,
    handleComplete: ()=> void;
    setSecondBoolean:React.Dispatch<React.SetStateAction<boolean>>,
    setBoolean: React.Dispatch<React.SetStateAction<boolean>>,
}

const CreateQuizComponent:React.FC<IVideoID> = ({id,videoId, handleComplete, setSecondBoolean, setBoolean}) => {
   const [length, setLength] = useState(0);

   const [start, setStart] = useState(0);

   const [end, setEnd] = useState(0);


    axios.get(Video_Base_Url, {
        params:{
            part: 'contentDetails',
            key: process.env.MIX_YOUTUBE_KEY,
            id: videoId,
        }
    }).then((response) => {
        //console.log(response.data.items[0].contentDetails.duration);
        const duration = response.data.items[0].contentDetails.duration;
        const [m, s] = duration.split("M");
        setLength(VideoTime(m, s));
        console.log(length);
    });


    const handleLength = () => {
        const data = {start: start, end: end, id: id};
        axios.post('/admin/length', data).then((response) => {
            console.log(response.data);
            confirm('保存が正常に確認されました');
            handleComplete();
            setSecondBoolean(true);
            setBoolean(false);
        }).catch((error) => console.log(error.message));
    }

    function handleChange(value: number | number[]){
        setStart(value[0]);
        setEnd(value[1]);
    }


    return(
    <Wrapper>
       <h1>Set Duration of this video</h1>
        <Box width={500}>
            <Slider
             onChange={(event: Event, value: number | number[])=>handleChange(value)}
             min={0}
             max={length}
             defaultValue={[0,20]}
             valueLabelDisplay="auto" />
        </Box>
        <Button
         onClick={handleLength}
        >
            Submit
        </Button>
    </Wrapper>
    );
}

export default CreateQuizComponent;

const Wrapper = styled.div`

  h1 {
      font-size: 30px;
      font-weight: bold;
      padding: 10px;
      background-color: white;
      border: 1px solid skyblue;
      border-radius: 20px;
  }
`;
