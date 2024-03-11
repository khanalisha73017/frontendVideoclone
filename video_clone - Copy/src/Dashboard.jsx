import React, { useState } from "react";
import { DashboardHeader } from "./layout/DashboardHeader";
import { CategoryOption } from "./component/CategoryOption";
import { categories } from "./Data/CategoriesData";
import { useSelector } from "react-redux";
import { DashboardCardLayOut } from "./layout/DashboardCardLayOut";
import { SideBar } from "./layout/SideBar";

export const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const videoData = useSelector((store) =>
    store.videoReducer.video.map((post) => post.submission)
  );
  console.log(videoData, "videoData.--->>");
  return (
    <div className="max-h-screen flex flex-col">
      <DashboardHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <SideBar />
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryOption
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          <div>
            <DashboardCardLayOut />
          </div>
        </div>
      </div>
    </div>
  );
};
