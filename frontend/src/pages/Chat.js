import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import "../partials/Chat/style.css";
import Sidebar from "../components/Sidebar";

const Chat = () => {
  const { user } = ChatState();
  const activeMenu = true
  return (
    <div>Chat</div>
  );
};

export default Chat;
