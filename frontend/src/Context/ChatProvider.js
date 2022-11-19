import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState()
  const [chats, setChats] = useState([])
  const [discard, setDiscard] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    setUser(userInfo)

    if(!userInfo) {
      navigate("/")
    }
  }, [navigate])
  return (
    <ChatContext.Provider value={{ user, setUser, setSelectedChat, chats, setChats, discard, setDiscard }}>
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
