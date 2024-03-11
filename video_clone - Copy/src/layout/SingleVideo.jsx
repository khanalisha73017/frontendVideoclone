import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ReactPlayer from "react-player";
import { DashboardHeader } from "./DashboardHeader";
import { ThumbsDown, ThumbsUp } from "lucide-react";

//LocalStorage
// Set data in local storage

export const SingleVideo = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  console.log(id, "singe---->");

  const { playing, controls } = useSelector((store) => store.videoReducer);
  console.log(playing, controls, "videoUrl");

  useEffect(() => {
    fetchSingle_Video();
  }, [id]);

  const fetchSingle_Video = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}?${id}`
      );

      let data = response.data.data.posts;
      let singleId = data.map((postId) => postId.postId);
      console.log(singleId, "singleData");
      for (let key in data) {
        if (singleId[key] === id) {
          setData(data[key]);
          console.log(data[key], "requireData");
        }
        // console.log(singleId[0], id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // dispatch(Get_Single_Video_Details(id));
  const { postId, submission, reaction } = data;
  console.log(postId, submission, "a");

  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <DashboardHeader />
      </div>
      <div className="flex justify-center flex-row h-[calc(100%-56px)]">
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
          <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
            <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0 rounded-xl overflow-hidden">
              <ReactPlayer
                url={submission?.mediaUrl}
                controls
                width="100%"
                height="100%"
                style={{ backgroundColor: "white" }}
                playing={true}
              />
            </div>
            <div className="text-gray font-bold text-sm md:text-xl mt-4 line-clamp-2">
              {submission?.title}
            </div>
            <div className="text-gray text-sm md:text-xl mt-4 line-clamp-2">
              {submission?.description}
            </div>
            <div className="flex justify-between flex-col md:flex-row mt-4">
              <div className="flex">
                <div className="flex items-start">
                  <div className="flex h-11 w-11 rounded-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={submission?.placeholderUrl}
                    />
                  </div>
                </div>
              </div>
              <div className="flex text-gray mt-4 md:mt-0">
                <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                  <ThumbsUp className="text-black" />
                  <h1>{reaction?.count}</h1>
                </div>
                <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                  <ThumbsDown className="text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
