import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import Sidebar from "../components/Sidebar";
import "../partials/Chat/style.css";
import ChatContent from "../components/ChatContent";

const Chat = () => {
  const { user } = ChatState();
  console.log(user);
  return (
    <div className="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
      <div className="flex-1 flex flex-col">
        <main className="flex-grow flex-flex-row min-h-0">
          <Sidebar />
          <ChatContent />
        </main>
      </div>
    </div>
  );
};

export default Chat;
