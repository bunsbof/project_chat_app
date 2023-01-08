import React from "react";

import {
  IoIosArrowForward,
  RxDotsVertical,
  RiMovieLine,
  ImFilesEmpty,
  MdInsertPhoto,
  BsFile,
} from "../../components/Icons";

import avatar from "../../assets/avatar.jpg";
import { useStateContext } from "../../context/ContextProvider";

const SharedFiles = () => {
  const { setToggleShared } = useStateContext();
  return (
    <div className="flex flex-col w-full px-4 overflow-y-hidden flex-shrink-0 xl:w-96 lg:w-60 md:w-full sm:w-full">
      <div className="flex flex-row items-start h-36 pt-16 navChat relative">
        <button
          className="bg-[#E0F4F1] text-[#00A186] w-8 h-8 flex justify-center items-center rounded-md sticky"
          onClick={() => setToggleShared((prev) => !prev)}
        >
          <IoIosArrowForward />
        </button>
        <h2 className="text-xl pl-8">Shared files</h2>
      </div>
      <div className="flex flex-col justify-around py-6 items-center h-1/4">
        <img
          src={avatar}
          alt="side-avatar"
          className="rounded-full object-cover w-24 h-24"
        />
        <h2 className="text-2xl">Jontray Arnold</h2>
        <p className="text-sm text-gray-400">10 members</p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="py-10 flex flex-row justify-between items-center">
            <div className="flex items-start">
              <h4 className="text-[#00A186] text-lg font-semibold">
                File type
              </h4>
            </div>
            <div className="flex items-end flex-row justify-end w-32">
              <button className="rounded-2xl hover:bg-[#E0F4F1] focus:bg-[#E0F4F1] text-2xl text-[#00A186] w-10 h-10 flex items-center justify-center">
                <RxDotsVertical />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center w-full h-96 space-y-1 overflow-y-auto">
          <div className="flex flex-row justify-between items-center w-full h-full pl-6 rouned-lg hover:bg-[#F7F8FA] hover:rounded-lg">
            <div className="h-14 w-14 bg-[#DFE1F9] rounded-lg flex justify-center items-center">
              <ImFilesEmpty className="text-2xl font-bold text-[#5A68DF]" />
            </div>
            <div>
              <div className="flex-start flex-col">
                <h3 className="text-xl font-bold text-black">Documents</h3>
                <p className="text-gray-400 text-md truncate">
                  126 files, 193MB
                </p>
              </div>
            </div>
            <div className="h-14 w-14 rounded-lg flex justify-center items-center">
              <IoIosArrowForward className="text-2xl font-bold text-gray-500" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full h-full pl-6 rouned-lg hover:bg-[#F7F8FA] hover:rounded-lg">
            <div className="h-14 w-14 bg-[#F4EACF] rounded-lg flex justify-center items-center">
              <MdInsertPhoto className="text-2xl font-bold text-[#C4B07A]" />
            </div>
            <div className="flex-start flex-col justify-start items-center">
              <h3 className="text-xl font-bold text-black">Photos</h3>
              <p className="text-gray-400 text-md truncate">53 files, 321MB</p>
            </div>
            <div className="h-14 w-14 rounded-lg flex justify-center items-center">
              <IoIosArrowForward className="text-2xl font-bold text-gray-500" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full h-full pl-6 rouned-lg hover:bg-[#F7F8FA] hover:rounded-lg">
            <div className="h-14 w-14 bg-[#E4F7F9] rounded-lg flex justify-center items-center">
              <RiMovieLine className="text-2xl font-bold text-[#50B0BA]" />
            </div>
            <div className="flex-start flex-col justify-start items-center">
              <h3 className="text-xl font-bold text-black">Movies</h3>
              <p className="text-gray-400 text-md truncate">3 files, 210MB</p>
            </div>
            <div className="h-14 w-14 rounded-lg flex justify-center items-center">
              <IoIosArrowForward className="text-2xl font-bold text-gray-500" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full h-full pl-6 rouned-lg hover:bg-[#F7F8FA] hover:rounded-lg">
            <div className="h-14 w-14 bg-[#FFE0DA] rounded-lg flex justify-center items-center">
              <BsFile className="text-2xl font-bold text-[#BE6E5F]" />
            </div>
            <div className="flex-start flex-col justify-start items-center">
              <h3 className="text-xl font-bold text-black">Other</h3>
              <p className="text-gray-400 text-md truncate">49 files, 194MB</p>
            </div>
            <div className="h-14 w-14 rounded-lg flex justify-center items-center">
              <IoIosArrowForward className="text-2xl font-bold text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedFiles;
