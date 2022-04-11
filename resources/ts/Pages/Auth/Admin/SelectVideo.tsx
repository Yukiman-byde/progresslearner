import React, {useState} from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks';
import { Card, Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import { NewButton } from '@/NewComponents/NewButton';

const SelectVideo = () => {

    const video = useAppSelector((state) => state.video);


    const handlePost = () => {
       axios({
           method: 'POST',
           url: `/admin/video/${video.title}`,
           data: {
               video: video,
           }
       }).then((response) => {
           const result = confirm('保存が完了しました。');
           if(result){
               window.location.href=`/admin/video/quiz/${video.videoId}`
           }
       }).catch((error) => {
           confirm('Oops. Something went wrong')
       });
    }


    return(
        <Wrapper>
            <CardStyled>
                <p>Now your chice</p>
                <CardContent>
                    <h2>{video.title}</h2>
                    <img
                     style={{marginLeft: 'auto', marginRight: 'auto'}}
                      src={video.thumbnail}/>
                    <h2>{video.description}</h2>
                </CardContent>
            </CardStyled>

            <NewButtonStyled
            color="#afeeee"
            onClick={handlePost}
            >
                Next Step
            </NewButtonStyled>
        </Wrapper>
    );
}

export default SelectVideo;

const Wrapper = styled.div`
     width: 100%;
     background-color: skyblue;
     border-left: 1px solid blueviolet;
     border-right: 1px solid blueviolet;
     border-bottom: 1px solid blueviolet;
     border-bottom-left-radius: 20px;
     border-bottom-right-radius: 20px;
     padding: 20px;
`;

const CardStyled = styled(Card)`
   margin-bottom: 30px;
`;


const NewButtonStyled = styled(NewButton)`
 margin: 0 auto;
`;
