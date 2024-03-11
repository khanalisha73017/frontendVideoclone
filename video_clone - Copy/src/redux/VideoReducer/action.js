import axios from "axios";
import {
  Sigle_Video_Sucess,
  Video_Error,
  Video_Loading,
  Video_Sucess,
} from "./actionType";

export const Get_Video_with_Data = async (dispatch) => {
  try {
    dispatch({ type: Video_Loading });
    let response = await axios.get(`${process.env.REACT_APP_API_URL}`);
    console.log(response.data.data.posts, "data");
    dispatch({ type: Video_Sucess, payload: response.data.data.posts });
  } catch (error) {
    dispatch({ type: Video_Error });
  }
};
