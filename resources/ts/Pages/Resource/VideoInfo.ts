import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IVideo } from "@/hooks";

const initialState: IVideo = {
    videoId: undefined,
    title: undefined,
    description: undefined,
    thumbnail: undefined,
}

const VideoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        select: (state, action: PayloadAction<IVideo>) => {
            state.videoId = action.payload.videoId;
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.thumbnail = action.payload.thumbnail;
        }
    }
});

export const { select } = VideoSlice.actions;

export default VideoSlice.reducer;

