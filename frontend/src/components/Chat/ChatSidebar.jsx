import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  IoIosArrowBack,
  FiSettings,
  HiOutlineMagnifyingGlass,
  AiOutlinePlus,
  RxDotsVertical,
} from "../../components/Icons";

import { useStateContext } from "../../context/ContextProvider";

import avatar from "../../assets/avatar.jpg";

const conversations = [
  {
    id: 1,
    image: avatar,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    latestMessage: "Testing 123",
    dateTime: "10:05",
  },
  {
    id: 2,

    image: avatar,
    name: "Donec auctor dictum nisl, et dictum erat malesuada eget",
    latestMessage: "et dictum erat malesuada eget",
    dateTime: "10:05",
  },
  {
    id: 3,

    image: avatar,
    name: "Evan Scott",
    latestMessage: "et dictum erat malesuada eget",

    dateTime: "10:05",
  },
  {
    id: 4,

    image: avatar,
    name: "Jonjet Kalson",
    latestMessage: "et dictum erat malesuada eget",

    dateTime: "10:05",
  },
  {
    id: 5,

    image: avatar,
    name: "Commodi minima",
    latestMessage: "et dictum erat malesuada eget",

    dateTime: "10:05",
  },
  {
    id: 6,

    image: avatar,
    name: "Quaerat",
    latestMessage: "et dictum erat malesuada eget",

    dateTime: "10:05",
  },
  {
    id: 7,

    image: avatar,
    name: "Possimus",
    latestMessage: "et dictum erat malesuada eget",

    dateTime: "10:05",
  },
  {
    id: 8,

    image: avatar,
    name: "Real estate deals Billing",
    latestMessage: "et dictum erat malesuada eget",

    dateTime: "10:05",
  },
];

const ChatSidebar = () => {
  const { activeChat, setToggleChat, windowWidth, setWindowWidth } =
    useStateContext();
  const { conversationId } = useParams();

  return (
    <div
      className={`flex flex-col w-full px-4 overflow-y-hidden flex-shrink-0 xl:w-96 lg:w-60 sm:w-full lg:md:${
        activeChat && windowWidth <= 1023 && setToggleChat((prev) => !prev)
          ? "hidden"
          : ""
      }`}
    >
      <div className="flex flex-row items-start h-36 pt-16 relative navChat">
        {conversationId && (
          <button
            className="bg-[#E0F4F1] text-[#00A186] w-8 h-8 flex justify-center items-center rounded-md sticky"
            onClick={() => setToggleChat((prev) => !prev)}
          >
            <IoIosArrowBack />
          </button>
        )}
        <h2 className="text-xl pl-8">Chat</h2>
      </div>
      <div className="flex flex-col justify-around py-6 items-center h-1/4">
        <div className="flex flex-row justify-between w-full items-start">
          <div></div>
          <img
            src={avatar}
            alt="side-avatar"
            className="rounded-full object-cover w-24 h-24"
          />
          <button className="sticky top-0 left-10 bottom-0 right-0 text-[#BAC1CA] text-xl">
            <FiSettings />
          </button>
        </div>
        <h2 className="text-2xl">Jontray Arnold</h2>
      </div>
      <div>
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-2xl text-[#00A186]">
              <HiOutlineMagnifyingGlass />
            </div>
            <input
              type="search"
              className="block w-full p-4 pl-6 text-lg text-gray-900 outline-none bg-[#F0F3F6] rounded-xl"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      <div className="flex flex-col">
        <div className="py-10 flex flex-row justify-between items-center">
          <div className="flex items-start">
            <h4 className="text-[#00A186] text-lg font-semibold">Last chats</h4>
          </div>
          <div className="flex items-end flex-row justify-between w-32">
            <button className="rounded-2xl hover:bg-[#E0F4F1] focus:bg-[#E0F4F1] text-2xl text-[#00A186] w-10 h-10 flex items-center justify-center">
              <AiOutlinePlus />
            </button>
            <button className="rounded-2xl hover:bg-[#E0F4F1] focus:bg-[#E0F4F1] text-2xl text-[#00A186] w-10 h-10 flex items-center justify-center">
              <RxDotsVertical />
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-1 h-96 overflow-y-auto">
          {conversations &&
            conversations.map((val, idx) => (
              <Link
                to={`/message/${val.id}`}
                key={idx}
                className="flex flex-row md:justify-around w-full py-3 px-4 sm:pl-6 rounded-lg hover:bg-[#F7F8FA] focus:bg-[#F7F8FA]"
                onClick={() => {
                  if (windowWidth <= 1023) setToggleChat((prev) => !prev);
                }}
              >
                <img
                  src={val.image}
                  alt="chat"
                  className="w-11 h-11 rounded-full"
                />
                {/* status here */}
                <div className="px-3 w-full sm:w-4/6 flex flex-col justify-between">
                  <h5 className="text-xl max-w-xs text-bold truncate">
                    {val.name}
                  </h5>
                  <p className="text-sm text-gray-400 truncate">
                    {val.latestMessage}
                  </p>
                </div>
                <p className="text-gray-500 text-md">{val.dateTime}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
