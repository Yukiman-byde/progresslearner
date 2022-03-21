import React, { useState, useEffect } from 'react';
import { IframeStyled } from '../Resource/Video';
import styled from 'styled-components';
import { IVideo } from '@/hooks';

type IVideoId = {
  videoId: string
}

const IFrame:React.FC<IVideoId> = ({videoId}) => {

   return (
     <IframeStyled
     src={`https://www.youtube.com/embed/${videoId}`}
     >
     </IframeStyled>
   )
}

export default IFrame;

