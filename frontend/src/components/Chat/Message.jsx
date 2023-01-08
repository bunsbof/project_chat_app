import React from "react";
import {VscDebugBreakpointFunction} from '../../components/Icons'

const Message = ({ img, user, content, datetime }) => {
  return (
    <div
      className={`flex flex-row my-12 ${
        user === "You" ? "flex-row-reverse justify-start" : "justify-start"
      } items-center px-4`}
    >
      {user !== "You" && (
        <div className="flex flex-col justify-end items-center">
          <img
            src={img}
            alt="user"
            className="h-12 w-12 object-cover rounded-full border-solid border-white"
          />
        </div>
      )}
      <div
        className={`flex flex-col justify-start ${
          user === "You" ? "pr-8" : "pl-8"
        }`}
      >
        <h5 className="text-sm font-medium">
          {user}, {datetime}
        </h5>
        <div className={`relative flex flex-col justify-center px-6 py-4 rounded-t-2xl rounded-b-lg ${user ==="You" ? 'bg-[#D0D3E3]': 'bg-white'}`}>
          <p className="max-w-xs text-lg text-left font-medium z-10">{content}</p>
          <VscDebugBreakpointFunction className={`absolute -bottom-3 translate-y-1.5  text-6xl ${user === "You" ? 'translate-x-7  right-0 text-[#D0D3E3]': '-translate-x-7 left-0 text-white'}`} />
        </div>
      </div>
    </div>
  );
};

export default Message;
