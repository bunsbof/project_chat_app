import React, { useEffect } from "react";

import ChatSidebar from "../components/Chat/ChatSidebar";
import Welcome from "../components/Chat/Welcome";
import ChatContent from "../components/Chat/ChatContent";
import SharedFiles from "../components/Chat/SharedFiles";

import { useStateContext } from "../context/ContextProvider";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { activeChat, setActiveChat, toggleChat, toggleShared, setToggleChat } =
    useStateContext();
  const { conversationId } = useParams();

  useEffect(() => {
    if (conversationId) setActiveChat(true)
    else {
      setActiveChat(false)
      setToggleChat(true)
    }
  }, [conversationId]);

  return (
    <div className="w-full h-screen flex flex-row justify-between rounded-3xl border-l-1 overflow-auto">
      {toggleChat && <ChatSidebar />}
      {activeChat ? (
        <>
          <ChatContent />
          {toggleShared && <SharedFiles />}
        </>
      ) : (
        <Welcome />
      )}
    </div>
  );
};

export default Chat;
