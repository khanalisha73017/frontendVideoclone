import {

  Video_Error,
  Video_Loading,
  Video_Sucess,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  video: [],
  url: null,
  playing: true,
  controls: true,
  volume: 0.8,
  muted: false,
  played: 0,
  loaded: 0,
  duration: 0,
  playbackRate: 1.0,
  loop: false,
};
export const reducer = (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case Video_Loading:
      return { ...state, isLoading: true, isError: false };
    case Video_Error:
      return { ...state, isLoading: false, isError: true };
    case Video_Sucess:
      return {
        ...state,
        isLoading: false,
        isError: false,
        video: action.payload,
        url: action.payload,
      };
    default:
      return { ...state };
  }
};
