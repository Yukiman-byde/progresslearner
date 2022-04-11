import { StringifyOptions } from "querystring";

export interface IProps {
    auth: {
        user: {
            created_at: number;
            email: string;
            id: number;
            name: string;
            updated_at: number;
            myAvatar?: string;
        }
    }
    errors?: {}
}

export interface IYoutubeVideo {
    id: {
        videoId: string,
      },
    snippet: {
        title: string,
        description: string,
        thumbnails: {
            medium: {
            url: string
            },
    },
    }
}

export interface IVideo {
    videoId: string | undefined,
    title: string | undefined,
    description: string | undefined,
    thumbnail: string | undefined,
}

export interface IVideoInfo {
    information: {
        id:number,
        youtube_id: number,
        start_time: number,
        end_time: number,
    }

    youtube: {
      id: number,
      name: string,
      thumbnail: string,
      videoId: string,
    }
 }

 export interface IPropsAndIVideo extends IProps {
     youtubes: {
         videoId: string,
         name: string,
         description: string,
         thumbnail: string,
     }
 }


