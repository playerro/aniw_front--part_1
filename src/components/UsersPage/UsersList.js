"use client";

import { useSelector } from "react-redux";

import UsersListMobile from "./UsersListMobile";
import UsersListDesktop from "./UsersListDesktop";
import UserListPageCounter from "./UserListPageCounter";

function UsersList({ theme }) {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <div className="lg:hidden">
        <UsersListMobile users={users} />
      </div>
      <div className="max-lg:hidden">
        <UsersListDesktop users={users} />
      </div>
      <UserListPageCounter theme={theme} />
    </div>
  );
}

export default UsersList;
