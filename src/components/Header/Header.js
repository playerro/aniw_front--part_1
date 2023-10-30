"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import HeaderModals from "./Header-Modals/HeaderModals";
import SidebarLeft from "@/components/Sidebar-Left/SidebarLeft";

function Header() {
  const { theme } = useTheme();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [showUserModal, setShowUserModal] = useState(false);
  const [showLanguageOptionsModal, setShowLanguageOptionsModal] =
    useState(false);

  return (
    <header className="h-[72px] bg-white dark:bg-custom-black-100">
      <nav className="relative flex items-center justify-between gap-3 px-5 py-4 lg:gap-11 lg:px-10 lg:py-3">
        <div className="flex items-center gap-2 lg:w-[220px] lg:gap-3">
          <button
            className="h-8 w-8 rounded-lg p-1 transition-all hover:scale-105 lg:hidden"
            onClick={() => setShowMobileMenu((prevState) => !prevState)}
          >
            <Image
              src={theme === "dark" ? "/menu-dark.svg" : "/menu-light.svg"}
              alt="Menu Icon"
              width={50}
              height={50}
            />
          </button>
          <Link href="/" className="inline-block h-8 w-8">
            <Image src="/logo.svg" alt="Page Logo" width={100} height={100} />
          </Link>
          <Link href="/" className="hidden text-base lg:inline-block">
            Aniw
          </Link>
        </div>
        <div className="relative ml-[60px] hidden flex-1 lg:block">
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
            className="w-full cursor-pointer rounded-xl border border-transparent bg-custom-gray-100 p-3 pl-[52px] placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:border-custom-gray-500 focus:bg-white focus:outline-none dark:bg-custom-black-500 dark:hover:border-custom-gray-900 dark:focus:border-custom-gray-900"
          />
        </div>
        <div className="flex items-center justify-end gap-3 lg:w-[280px] lg:gap-4">
          <button className="h-10 w-10 rounded-3xl bg-custom-gray-100 p-2 transition-all hover:bg-custom-gray-300 dark:bg-custom-black-300 dark:hover:bg-custom-black-500 lg:hidden">
            <Image
              src={theme === "dark" ? "/search-dark.svg" : "/search-light.svg"}
              alt="Search Icon"
              width={50}
              height={50}
            />
          </button>
          <button className="h-10 w-10 rounded-3xl bg-custom-gray-100  p-2 transition-all hover:bg-custom-gray-300 dark:bg-custom-black-300 dark:hover:bg-custom-black-500">
            <Image
              src={
                theme === "dark"
                  ? "/notification-dark.svg"
                  : "/notification-light.svg"
              }
              alt="Notification Icon"
              width={50}
              height={50}
            />
          </button>
          <button
            className="h-10 w-10 rounded-3xl"
            onClick={() => {
              setShowUserModal((prevState) => !prevState);
              setShowLanguageOptionsModal(false);
            }}
          >
            <Image
              src="/user-avatar.png"
              alt="User Avatar"
              width={150}
              height={150}
            />
          </button>
        </div>
        {showUserModal && (
          <div className="absolute right-5 top-16 z-[999] lg:right-10">
            <HeaderModals
              onCloseUserModal={() => setShowUserModal(false)}
              showLanguageOptionsModal={showLanguageOptionsModal}
              onToggleLanguageOptionsModalVisibility={() =>
                setShowLanguageOptionsModal((prevState) => !prevState)
              }
            />
          </div>
        )}
      </nav>
      {showMobileMenu && (
        <div className="absolute left-0 top-0 z-[999] h-screen w-full bg-white dark:bg-custom-black-500">
          <div className="flex items-center justify-between border-b border-custom-gray-300 px-5 py-4 dark:bg-custom-black-100">
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-block h-8 w-8">
                <Image
                  src="/logo.svg"
                  alt="Page Logo"
                  width={100}
                  height={100}
                />
              </Link>
              <Link href="/" className="text-base">
                Aniw
              </Link>
            </div>
            <button
              className="h-8 w-8 transition-all hover:scale-110"
              onClick={() => {
                setShowMobileMenu(false);
              }}
            >
              <Image
                src={theme === "dark" ? "/close-dark.svg" : "/close-light.svg"}
                alt="Close Icon"
                width={70}
                height={70}
              />
            </button>
          </div>
          <SidebarLeft
            theme={theme}
            onHideMobileMenu={() => setShowMobileMenu(false)}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
