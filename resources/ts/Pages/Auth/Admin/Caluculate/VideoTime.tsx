import React from 'react'

interface Props {
   m: number,
   s: number,
}

export interface IResult {
    start: number,
    end: number
}
function VideoTime(m: string, s: string):number{
    const minute = m.match(/\d+/g);
    const second = s.match(/\d+/g);
    const num_minute = Number(minute);
    const num_second = Number(second);

    const total_minute = num_minute * 60 + num_second;
    return total_minute;
}

export default VideoTime
