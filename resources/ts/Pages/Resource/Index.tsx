import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { Provider } from 'react-redux';
import { IProps, IYoutubeVideo, IVideo } from '@/hooks';
import InputComponent from './InputComponent';
import axios, { AxiosResponse } from 'axios';
import Search_Base_Url from '../Youtube/YoutubeApi';
import styled, {keyframes} from 'styled-components';
import Video from './Video';
import SelectVideo from './SelectVideo';
import { store } from '../store';



const Index:React.FC<IProps>  = (props:IProps) => {
    const [keyword, setKeyword] = useState("");

    const [video, setVideo] = useState<IYoutubeVideo[]>([]);

    const handleClick = ():void => {
       setVideo([]);
       axios.get(Search_Base_Url, {
           params: {
               part: "snippet",
               key: process.env.MIX_YOUTUBE_KEY,
               q: keyword,
               maxResult: 5,
           }
       }).then((response: AxiosResponse) => {
            const n = response.data.items.length;
            for(let i = 0; i < n; i++){
                setVideo(prevVideo => [...prevVideo, response.data.items[i]]);
            }
        }).catch((error) => console.log(error.message));
    }

    function handleSelect(event:React.MouseEventHandler<HTMLButtonElement>){

    }

   return (
       <Authenticated
       auth={props.auth}
       errors={props.errors}
       >
            <Wrapper>
              <Provider store={store}>
                <LeftWrapper>
                        {video.map((value, index) => (
                        <Video
                            key={index}
                            videoId={value.id.videoId}
                            title={value.snippet.title}
                            description={value.snippet.description}
                            thumbnail={value.snippet.thumbnails.medium.url}
                        >
                        </Video>
                        ))}
                </LeftWrapper>
                <RightWrapper>
                    <InputComponent
                    title="Write keyword here"
                    placeholder="write keyword"
                    setKeyword={setKeyword}
                    handleClick={handleClick}
                     />
                     <SelectVideo />
                </RightWrapper>
              </Provider>
            </Wrapper>
        </Authenticated>
   );
}

export default Index;

export const Wrapper = styled.div`
white-space: pre-wrap;
  max-width: 1200px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  padding-top: 100px;
`;

const LeftWrapper = styled.div`
flex: 0.7;
`;

const RightWrapper = styled.div`
  display: block;
  flex: 0.4;
  margin-left: 10px;
  padding: 10px;
  right: 30px;
  width: 40%;
  text-align: center;
  justify-content: center;
  position: fixed;
  overflow-x: clip;
  transform: translateY(-35px);
`;
