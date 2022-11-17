import React from "react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <div className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
      <img
        className="mr-2 w-6 h-6 rounded-full"
        src={user.pic}
        alt="Jese image"
      />
      <div className="flex flex-col item-center justify-center">
        <p className="text-lg">{user.name}</p>
        <p className="text-sm">{user.email}</p>
      </div>
    </div>
  );
};

export default UserListItem;
