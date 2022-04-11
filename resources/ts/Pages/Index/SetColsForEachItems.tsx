import { IVideo } from '@/Pages/Auth/hooks';
import React, {useState, useEffect} from 'react';

export interface IVideos {
        created_at: string,
        description: string,
        name: string,
        id: number,
        thumbnail: string,
        videoId: string,
}


export interface IDatum {
    img: string,
    title: string,
    rows: number,
    cols: number,
    created_at: string,
}


 function SetsColsForEachItems(
     items: IVideos[]
    ) :IDatum[]
    {

     const number = items.length;

     const datum:IDatum[] = [];

     for(let i = 0; i < number; i++){
        datum.push({
            img: items[i].thumbnail,
            title: items[i].name,
            rows: (i % 3 == 0 ? 2 : 1),
            cols: (i % 3 == 0 ? 2 : 1),
            created_at: items[i].created_at
        });
     }

    return datum;

}

export default SetsColsForEachItems


