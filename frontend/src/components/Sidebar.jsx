import React, { useState } from "react";
import { BsChatLeftDots } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import ActiveConversations from "./ActiveConversations";
import Archived from "./Archived";
import { useNavigate } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import ProfileModal from "./ProfileModal";

const Sidebar = () => {
  const {user} = ChatState()
  const [dropdown, setDropdown] = useState(true);
  const [profile, setProfile] = useState(true)
  const [toggleFindField, setToggleFindField] = useState(false)
  const navigate = useNavigate()
  const logoutHandler = () => {
    localStorage.removeItem("userInfo")
    navigate('/')
  }

  return (
    <>
      <SideDrawer isShown={toggleFindField}/>
      <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
        <div className="flex flex-row items-center justify-center h-12 w-full">
          <div className="flex items-center justify-center rounded-2xl text-indigo-700 text-2xl bg-indigo-100 h-10 w-10">
            <BsChatLeftDots onClick={() => setToggleFindField(prev => !prev)}/>
          </div>
          <div className="ml-2 font-bold text-2xl">Talky Talky</div>
        </div>
        <div className="relative flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
          <button
            className="absolute right-1 top-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
            onClick={() => setDropdown(prev => !prev)}
          >
            <span className="sr-only">Open dropdown</span>
            <BsThreeDotsVertical className="text-2xl"/>
          </button>
          <div className={`z-10 ${dropdown ? 'hidden' : ''} absolute right-1 text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700`}>
            <ul className="py-1" aria-labelledby="dropdownButton">
            <li>
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={() => setProfile(prev => !prev)}>Profile</p>
                {/* {profile && <ProfileModal/>} */}
            </li>
            <li>
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Create New Group</p>
            </li>
            <li>
                <p className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={logoutHandler}>Logout</p>
            </li>
            </ul>
        </div>
          <div className="h-20 w-20 rounded-full border overflow-hidden">
            <img src={user.pic} alt="Avatar" className="h-full w-full" />
          </div>
          <div className="text-sm font-semibold mt-2">{user.name}.</div>
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
