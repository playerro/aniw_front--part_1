"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

function CreateItemHeading({ itemType }) {
  const { theme } = useTheme();

  const link =
    itemType === "post"
      ? "/posts/create-post"
      : itemType === "file"
      ? "/files/create-file"
      : "/";

  return (
    <div className="mb-6 flex items-center justify-between gap-3 px-4 lg:px-0">
      <span className="inline-block h-10 w-10">
        <Image
          src="/user-avatar.png"
          alt="User Avatar"
          width={200}
          height={200}
        />
      </span>
      <Link
        href={link}
        className="dark:bg-custom-black-100 flex-1 rounded-xl border border-transparent bg-white px-4 py-3 text-base text-custom-gray-700 transition-all hover:border-custom-gray-500 dark:hover:border-custom-gray-700"
      >
        {`Create new ${itemType}`}
      </Link>
      <Link
        href={link}
        className="dark:bg-custom-black-100 h-12 w-12 rounded-xl border border-transparent bg-white p-3 transition-all hover:border-custom-gray-500 dark:hover:border-custom-gray-700"
      >
        <Image
          src={theme === "dark" ? "/image-dark.svg" : "/image-light.svg"}
          alt="Add Img Icon"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}

export default CreateItemHeading;
