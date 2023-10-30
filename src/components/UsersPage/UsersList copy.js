"use client";

import { useSelector } from "react-redux";

import UsersListMobile from "./UsersListMobile";
import UsersListDesktop from "./UsersListDesktop";
import UserListPageCounter from "./UserListPageCounter";
import { useEffect, useState } from "react";

function UsersList({ theme }) {
  const [screenWidth, setScreenWidth] = useState(null);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <div>
      {!screenWidth ? (
        <div className="mb-10 flex items-center justify-center text-3xl font-semibold">
          Loading...
        </div>
      ) : screenWidth < 1024 ? (
        <UsersListMobile users={users} />
      ) : (
        <UsersListDesktop users={users} />
      )}
      <UserListPageCounter theme={theme} />
    </div>
  );
}

export default UsersList;
