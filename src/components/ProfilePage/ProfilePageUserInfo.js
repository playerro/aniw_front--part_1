"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

function ProfilePageUserInfo() {
  const { theme } = useTheme();
  return (
    <div className="flex w-full flex-col gap-6 px-5 lg:w-[220px] lg:px-0">
      <div className="flex flex-col gap-6">
        <div className="relative h-[84px] w-[84px]">
          <Image
            src="/user-avatar.png"
            alt="User Avatar"
            width={400}
            height={400}
          />
          <div className="dark:border-custom-black-500 absolute left-0 top-0 h-5 w-5 rounded-full border-4 border-custom-gray-100 bg-custom-green" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-2xl font-semibold">Lucas Pacheco</h1>
          <p className="text-sm">lucaspacheco</p>
          <p className="dark:bg-custom-black-300 rounded-lg bg-white px-2 py-[2px] text-sm">
            Admin
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={
                theme === "dark" ? "/location-dark.svg" : "/location-light.svg"
              }
              alt="Location Icon"
              width={50}
              height={50}
            />
          </span>
          <p className="text-sm">Russia Moscow</p>
        </div>
        <button className="w-full rounded-xl border border-black py-3 text-base font-medium transition-all hover:border-custom-gray-700 hover:text-custom-gray-700 dark:border-custom-gray-900">
          Edit Profile
        </button>
      </div>
      <div className="dark:border-custom-black-300 flex flex-col gap-4 border-y border-custom-gray-300 py-6 text-base">
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={theme === "dark" ? "/posts-dark.svg" : "/posts-light.svg"}
              alt="Posts Icon"
              width={50}
              height={50}
            />
          </span>
          <span>Posts</span>
          <span className="ml-auto">0</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={
                theme === "dark" ? "/comment-dark.svg" : "/comment-light.svg"
              }
              alt="Comments Icon"
              width={50}
              height={50}
            />
          </span>
          <span>Comments</span>
          <span className="ml-auto">0</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={theme === "dark" ? "/files-dark.svg" : "/files-light.svg"}
              alt="Files Icon"
              width={50}
              height={50}
            />
          </span>
          <span>Files</span>
          <span className="ml-auto">0</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={
                theme === "dark" ? "/projects-dark.svg" : "/projects-light.svg"
              }
              alt="Projects Icon"
              width={50}
              height={50}
            />
          </span>
          <span>Projects</span>
          <span className="ml-auto">0</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-base">
        <span>Registration</span>
        <span>Yan 25, 2023</span>
      </div>
    </div>
  );
}

export default ProfilePageUserInfo;
