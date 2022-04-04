import { JSXElement } from '@babel/types';
import React, {useState, useEffect} from 'react';

export interface IVideos {
    created_at: string,
    description: string,
    name: string,
    id: number,
    thumbnail: string,
    videoId: string,
}

export interface IVideoType {
    img: string | null,
    name: string | null,
    rows: number | null,
    cols: number | null,
    created_at: string,
}

export interface IDatum {
    img: string,
    title: string,
    rows: number,
    cols: number,
    created_at: string,
}


 function SetsColsForEachItems(items){
     const number = items.videos.length;

     const datum:IDatum[] = [];

     const videos:IVideoType = items.videos;


     for(let i = 0; i < number; i++){
        datum.push({img: videos[i].thumbnail, title: videos[i].name, rows: (i % 3 == 0 ? 2 : 1), cols: (i % 3 == 0 ? 2 : 1), created_at: videos[i].created_at});
     }

    return datum;

}

export default SetsColsForEachItems


