import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Get_Video_with_Data } from "../redux/VideoReducer/action";

export const DashboardCardLayOut = () => {
  const [VideoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const dispatch = useDispatch();

  const videoData = useSelector((store) => store.videoReducer.video);
  console.log(videoData, "data");

  // setItem on Local storage!
  const comment = videoData.map((comment) => comment.comment);
  let Like_Count = videoData
    .map((comment) => comment.reaction)
    .map((ele) => ele.count);

  localStorage.setItem("comment", JSON.stringify(comment));
  localStorage.setItem("Like_Count", JSON.stringify(Like_Count));
  console.log(comment);

  //!!!!!!!!!!!!!!!!!!
  const videDetails = useSelector((store) =>
    store.videoReducer.video.map((post) => post.submission)
  );
  console.log(videDetails, "thumnail");

  useEffect(() => {
    Get_Video_with_Data(dispatch);
  }, []);

  useEffect(() => {
    if (videoRef.current === null) return;
    if (VideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [VideoPlaying]);
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(400px,1fr))] ">
      {videoData?.map((video, index) => (
        <div
          key={index}
          className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(400px,1fr))]"
          onMouseEnter={() => setVideoPlaying(true)}
          onMouseLeave={() => setVideoPlaying(false)}
        >
          <a href="/" className="relative aspect-video">
            <img
              src={video.submission.thumbnail}
              alt=""
              className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${
                VideoPlaying ? "rounded-none" : "rounded-xl"
              }`}
            />
            <a href={`/video/${video.postId}`}>
              <video
                className={`block h-full w-full object-cover absolute inset-0 transition-opacity duration-200 ${
                  VideoPlaying ? "opacity-100 delay-200" : "opacity-0"
                }`}
                ref={videoRef}
                muted
                playsInline
                src={video.submission.mediaUrl}
              />
            </a>
          </a>
          <div className="flex gap-2">
            <a href="" className="flex-shrink-0">
              <img
                src={video.submission.placeholderUrl}
                alt=""
                className="h-12 w-12 rounded-full"
              />
            </a>

            <div className="flex flex-col">
              <a href="" className="text-secomdary-text text-sm">
                {video.submission.title}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
