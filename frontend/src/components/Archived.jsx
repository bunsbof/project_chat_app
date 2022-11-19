import React, { useState, useEffect } from "react";
import { ChatState } from "../Context/ChatProvider";
import axios from "axios";
import Loading from "./Loading";
import { getSender } from "../config/ChatLogic";

const Archived = () => {
  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, user, chats, setChats } = ChatState();

  const fetchChats = async () => {
    // console.log(user._id)
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);
      // console.log(data);
      setChats(data);
    } catch (error) {}
  };
  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
    console.log(loggedUser);
  }, []);
  return (
    <>
      <div className="flex flex-row items-center justify-between text-xs mt-6">
        <span className="font-bold">Archivied</span>
        <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
          7
        </span>
      </div>
      <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
        {chats ? (
          chats.map((chat) => (
            <li key={chat._id} className="list-none w-full">
              <button
                key={toString(chat._id)}
                className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 w-full active:bg-gray-100"
              >
                <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                  B
                </div>
                <div className="ml-2 text-sm font-semibold">
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </div>
                {/* <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                  2
                </div> */}
              </button>
            </li>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Archived;
