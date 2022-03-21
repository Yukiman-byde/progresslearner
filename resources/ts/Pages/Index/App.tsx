import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { IProps } from '@/hooks';
import IFrame from './IFrame';
import axios from 'axios';
import styled from 'styled-components';

interface IPropsAndIVideo extends IProps {
    youtubes: {
        videoId: string,
        name: string,
        description: string,
        thumbnail: string,
    }
}


const App:React.FC<IPropsAndIVideo> = (props) => {
   console.log(props.youtubes[1].videoId);
   let number: number = 4;
    return (
        <Authenticated
        auth={props.auth}
        errors={props.errors}
           header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >
        <Wrapper>
            <h1>Latest Videos</h1>
            <IFrameWork>
            <IFrame videoId={props.youtubes[0].videoId}/>
            <IFrame videoId={props.youtubes[1].videoId}/>
            </IFrameWork>
        </Wrapper>

        </Authenticated>
    );
}

export default App;

const Wrapper = styled.div`
    width: 100%;
    background: mediumseagreen;
    text-align: center;

    h1 {
        font-size: 20px;
        color: white;
        border: 1px solid #fff;
        background-color: cyan;
    }
`;

const IFrameWork = styled.div`
   max-width: 1200px;
   width: 100%;
   margin: 0 auto;
   display: flex;
   justify-content: space-evenly;
   padding-top: 34px;
   height: 400px;
`;

