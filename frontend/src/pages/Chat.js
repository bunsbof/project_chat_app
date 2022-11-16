import React, { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";

const Chat = () => {
  const { user } = ChatState();

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <div className="flex h-screen antialiased text-gray-800 w-full">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <Sidebar />
          <div className="flex flex-col flex-auto h-full p-6 w-full">
            <div className="flex flex-row justify-end w-full my-4">
              <div>test</div>
              <div>test</div>
            </div>
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
