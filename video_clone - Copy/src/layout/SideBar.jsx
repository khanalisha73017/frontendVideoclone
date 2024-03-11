import { Clapperboard, Home, Library, Repeat } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";
import { ButtonStyles } from "../component/Button";

export const SideBar = () => {
  return (
    <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1">
      <SmallSidebarIcon Icon={Home} title="Home" url="/" />
      <SmallSidebarIcon Icon={Repeat} title="short" url="" />
      <SmallSidebarIcon Icon={Clapperboard} title="Subscription" url="" />
      <SmallSidebarIcon Icon={Library} title="Library" url="" />
    </aside>
  );
};

function SmallSidebarIcon({ Icon, title, url }) {
  return (
    <a
      href={url}
      className={twMerge(
        ButtonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1 text-gray"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}
