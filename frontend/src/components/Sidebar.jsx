import React from "react";
import test from '../dummy-users/user.jpg'
import { BsChatLeftDots } from "react-icons/bs";
import ActiveConversations from "./ActiveConversations";
import Archived from "./Archived";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
        <div className="flex flex-row items-center justify-center h-12 w-full">
          <div className="flex items-center justify-center rounded-2xl text-indigo-700 text-2xl bg-indigo-100 h-10 w-10">
            <BsChatLeftDots />
          </div>
          <div className="ml-2 font-bold text-2xl">Talky Talky</div>
        </div>
        <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
          <div className="h-20 w-20 rounded-full border overflow-hidden">
            <img
              src={test}
              alt="Avatar"
              className="h-full w-full"
            />
          </div>
          <div className="text-sm font-semibold mt-2">Bunsbof.</div>
          <div className="text-xs text-gray-500">Playing your mom</div>
        </div>
        <div className="flex flex-col mt-8">
          <ActiveConversations />
          <Archived />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
