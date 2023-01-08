import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

// const initialState = {
//   chats: true,
//   sharedFile: true,
// };

export const ContextProvider = ({ children }) => {
  const [activeChat, setActiveChat] = useState(false);
  const [activeBtn, setActiveBtn] = useState("#E0F4F1");
  const [toggleChat, setToggleChat] = useState(false);
  const [toggleShared, setToggleShared] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  return (
    <StateContext.Provider
      value={{
        activeChat,
        setActiveChat,
        activeBtn,
        setActiveBtn,
        toggleChat,
        setToggleChat,
        toggleShared,
        setToggleShared,
        windowWidth,
        setWindowWidth,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
