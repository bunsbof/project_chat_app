import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";

const Chat = () => {
  const {user} = ChatState()
  console.log(user)
  return (
    <div>
      
    </div>
  );
};

export default Chat;
