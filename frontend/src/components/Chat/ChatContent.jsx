import React, { useEffect, useRef } from "react";
import {
  FiSend,
  BsEmojiSmile,
  IoIosArrowBack,
  IoIosArrowForward,
  ImAttachment,
} from "../../components/Icons";

import avatar from "../../assets/avatar.jpg";
import Message from "./Message";
import { useParams } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

const messages = [
  {
    name: "Jonjet Kalson",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit 😒",
    dateTime: "11:23 AM",
    avatar: avatar,
  },
  {
    name: "Kate Johnson",
    content:
      "Donec auctor dictum nisl, et dictum erat malesuada eget. Praesent quis urna at elit volutpat cursus. Phasellus auctor nunc eu nisi imperdiet, sit amet rutrum metus dictum. Nunc id semper dui. 😒",
    dateTime: "11:24 AM",
    avatar: avatar,
  },
  {
    name: "Evan Scott",
    content:
      "Fusce lobortis nisi at ipsum ornare tempus. Pellentesque mollis congue diam in suscipit. Suspendisse potenti.",
    dateTime: "11:25 AM",
    avatar: avatar,
  },
  {
    name: "Evan Scott",
    content: "@Robert ? 🤣",
    dateTime: "11:25 AM",
    avatar: avatar,
  },
  {
    name: "You",
    content: "Aliquam eget semper libero. 😁",
    dateTime: "11:26 AM",
    avatar: avatar,
  },
  {
    name: "You",
    content: "😎😉",
    dateTime: "11:26 AM",
    avatar: avatar,
  },
  {
    name: "Evan Scott",
    content: "Suspendisse potenti :) 😂",
    dateTime: "11:34 AM",
    avatar: avatar,
  },
  {
    name: "Evan Scott",
    content:
      "Nunc quis consectetur velit. Sed vel ipsum a urna posuere consectetur ac id mauris. Nulla facilisi. :) 😂",
    dateTime: "11:34 AM",
    avatar: avatar,
  },
  {
    name: "Evan Scott",
    content: "Reprehenderit, quia. Quo neque error repudiandae fuga?",
    dateTime: "11:34 AM",
    avatar: avatar,
  },
  {
    name: "Evan Scott",
    content:
      "Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?",
    dateTime: "11:34 AM",
    avatar: avatar,
  },
  {
    name: "Evan Scott",
    content:
      "Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. erspiciatis minima nesciunt dolorem!",
    dateTime: "11:34 AM",
    avatar: avatar,
  },
  {
    name: "Evan Scott",
    content:
      "Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora.",
    dateTime: "11:34 AM",
    avatar: avatar,
  },
  {
    name: "You",
    content:
      "Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur!",
    dateTime: "11:34 AM",
    avatar: avatar,
  },
  {
    name: "Evan Scott",
    content:
      "Commodi minima excepturi repudiandae velit hic maxime doloremque.",
    dateTime: "11:34 AM",
    avatar: avatar,
  },
  {
    name: "You",
    content:
      "Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat.",
    dateTime: "11:34 AM",
    avatar: avatar,
  },
  {
    name: "You",
    content:
      "Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam",
    dateTime: "11:34 AM",
    avatar: avatar,
  },
];

const ChatContent = () => {
  const { conversationId } = useParams();
  const {
    activeChat,
    toggleChat,
    setToggleChat,
    toggleShared,
    setToggleShared,
  } = useStateContext();

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`relative w-full bg-[#EDF0F5] my-6 rounded-2xl overflow-x-hidden sm:${
        toggleShared ? "hidden" : ""
      }`}
    >
      <div className="absolute bg-[#EDF0F5] bg-opacity-90 z-50 border-b-1 border-b-[#d4d7da] w-full h-[101px] rounded-t-2xl flex flex-row justify-between items-center px-2">
        {toggleChat === false && activeChat && (
          <button
            className="bg-[#E0F4F1] text-[#00A186] w-8 h-8 flex justify-center items-center rounded-md sticky"
            onClick={() => setToggleChat((prev) => !prev)}
          >
            <IoIosArrowForward />
          </button>
        )}
        <h2 className="text-xl pl-8 font-medium capitalize">
          The Conversation ID is {conversationId}
        </h2>
        {toggleShared === false && (
          <button
            className="bg-[#E0F4F1] text-[#00A186] w-8 h-8 flex justify-center items-center rounded-md sticky"
            onClick={() => setToggleShared((prev) => !prev)}
          >
            <IoIosArrowBack />
          </button>
        )}
      </div>
      <div className="flex flex-col h-[720px] rounded-2xl space-y-1 overflow-y-auto">
        {messages.map((val, idx) => (
          <Message
            key={idx}
            img={val.avatar}
            user={val.name}
            content={val.content}
            datetime={val.dateTime}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="relative flex justify-center items-center w-full h-1/6">
        <form
          onSubmit={onSubmitForm}
          className="absolute top-28 w-full md:w-4/5 z-50 sm:w-4/5"
        >
          <label
            htmlFor="message"
            className="mb-2 text-sm font-medium text-gray-600 sr-only"
          >
            Write your message
          </label>
          <div className="relative">
            <input
              type="text"
              id="message"
              className="block w-full h-16 p-4 pl-10 text-sm text-gray-600 rounded-2xl bg-white outline-none"
              placeholder="Write your message..."
            />
            <div className="absolute inset-y-0 right-0 flex flex-row justify-between items-center py-3 pr-3 w-32 text-gray-400">
              <BsEmojiSmile className="text-lg" />
              <ImAttachment className="text-lg" />
              <button
                type="submit"
                className="bg-[#00A389] text-white text-lg h-full hover:bg-green-700 outline-none font-medium rounded-xl px-4 py-2"
              >
                <FiSend />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatContent;
