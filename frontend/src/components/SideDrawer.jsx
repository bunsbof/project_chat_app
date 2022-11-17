import React, { useState } from "react";
import { HiOutlineMagnifyingGlassCircle } from "react-icons/hi2";
import { ChatState } from "../Context/ChatProvider";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import Loading from "./Loading";
import UserListItem from "./UserAvatar/UserListItem";

const SideDrawer = ({isShown}) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  const { user, setSelectedChat, chats, setChats } = ChatState();
  const toast = useToast();
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(`/api/user?search=${search}`, config);
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const {data} = await axios.post('/api/chat', {userId}, config)
      setSelectedChat(data)
      setLoadingChat(false);
      isShown = false
    } catch (error) {
      toast({
        title: "Error Fetching the chat!",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  return (
    <aside className={`w-96 ${isShown? '': 'hidden'}`}>
      <div className="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
        <form onSubmit={handleSearch}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <input
              value={search}
              type="text"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:outline-none active:outline-none"
              placeholder="Search Users..."
              onChange={(e) => setSearch(e.target.value)}
              required
            />
          </div>
        </form>
        {loading ? (
          <Loading />
        ) : (
          searchResult?.map((find) => (
            <UserListItem
              key={find._id}
              user={find}
              handleFunction={() => accessChat(find._id)}
            />
          ))
        )}
      </div>
    </aside>
  );
};

export default SideDrawer;
