"use client";

import PageLayout from "@/components/UI/Page-Layout/PageLayout";
import SidebarRightSort from "@/components/Sidebar-Right/SidebarRightSort";
import UsersList from "./UsersList";
import Image from "next/image";
import { useTheme } from "next-themes";

function UsersPageContent() {
  const { theme } = useTheme();

  return (
    <PageLayout>
      <section className="lg:ml-[60px] lg:flex-1">
        <div className="relative mb-6">
          <span className="absolute left-4 top-3 inline-block h-6 w-6">
            <Image
              src={theme === "dark" ? "/search-dark.svg" : "/search-light.svg"}
              alt="Search Icon"
              width={50}
              height={50}
            />
          </span>
          <input
            type="search"
            placeholder="Search"
            className="w-full cursor-pointer rounded-xl border border-transparent bg-white p-3 pl-[52px] placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:border-custom-gray-500 focus:outline-none dark:bg-custom-black-100 dark:hover:border-custom-gray-900 dark:focus:border-custom-gray-900"
          />
        </div>
        <div className="mb-6 px-4 lg:hidden">
          <SidebarRightSort />
        </div>
        <UsersList theme={theme} />
      </section>
    </PageLayout>
  );
}

export default UsersPageContent;
