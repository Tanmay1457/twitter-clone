import Image from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IoMdHome, IoMdNotificationsOutline } from "react-icons/io";
import { BiHash } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiBookmark, CiCircleMore, CiUser } from "react-icons/ci";
import FeedCard from "@/components/FeedCard";
import { MdPeople } from "react-icons/md";



interface TwitterSidebarButton {
  title:  string;
  icon: React.ReactNode;
}

const sidebarMenuItems:  TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <IoMdHome/>,
  },

  {
    title: "Explore",
    icon: <BiHash />,
  },
  
  {
    title: "Notifications",
    icon: <IoMdNotificationsOutline />,
  },
  {
    title: "Messages",
    icon: <FaRegEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <CiBookmark />,
  },
  {
    title: "Communities",
    icon: <MdPeople />,
  },
  
  {
    title: "Profile",
    icon: <CiUser />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
  
];

export default function Home() {
  return (
   <div >
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3  pt-1  ml-15 ">
        <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
        <FaTwitter/>
        </div>
        <div className="mt-1 text-xl  px-3">
          <ul>
          {sidebarMenuItems.map(item => <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer mt-2 "key={item.title}>
            <span className="text-xl">{item.icon}</span>
            <span>{item.title}</span></li>)}
          </ul>
          <div className="mt-5 px-5">
          <button className="bg-[#1d9bf0] rounded-full w-full text-lg font-semibold py-2 px-4">Tweet</button>
          </div>
        </div>
      </div>
      <div className="col-span-5 border-r-[1px]  border-l-[1px] h-screen overflow-y-scroll no-scrollbar border-gray-600  ">
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      
      </div>
      
      <div className="col-span-3"></div>
    </div>  
   </div>
  );
}
