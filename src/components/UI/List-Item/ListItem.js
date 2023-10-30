"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ItemMenuModal from "@/components/UI/Item-Modals/ItemMenuModal";
import ItemShareModal from "@/components/UI/Item-Modals/ItemShareModal";

function ListItem({ listType, itemContent, canAddComment, canDownload }) {
  const { theme } = useTheme();

  const [showItemMenuModal, setShowItemMenuModal] = useState(false);
  const [showItemShareModal, setShowItemShareModal] = useState(false);

  const {
    id,
    avatar,
    author,
    date,
    time,
    isPremium,
    title,
    image,
    isModelPremium,
    text,
    categories,
    likesNumber,
    viewsNumber,
    downloadsNumber,
    commentsNumber,
  } = itemContent;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="rounded-xl bg-white px-4 py-3 dark:bg-custom-black-100 lg:px-6 lg:py-5">
      <div className="mb-3 flex items-center gap-3 whitespace-nowrap">
        <span className="inline-block h-6 w-6">
          <Image src={avatar} alt="Avatar Img" width={70} height={70} />
        </span>
        <p className="text-sm">{author}</p>
        <p className="text-sm text-custom-gray-700">
          {formattedDate} {time}
        </p>
        <div className="relative ml-auto">
          <button
            className={`h-8 w-8 rounded-3xl p-1 hover:bg-custom-gray-100 dark:hover:bg-custom-black-300  ${
              showItemMenuModal && "bg-custom-gray-100 dark:bg-custom-black-300"
            }`}
            onClick={() => setShowItemMenuModal((prevState) => !prevState)}
          >
            <Image
              src={theme === "dark" ? "/dots-dark.svg" : "/dots-light.svg"}
              alt="Dots Icon"
              width={50}
              height={50}
            />
          </button>
          {showItemMenuModal && (
            <ItemMenuModal
              menuOptions={["Edit", "Translate to English", "Report"]}
            />
          )}
        </div>
      </div>
      {isPremium && (
        <div className="mb-3 inline-block rounded-lg bg-custom-gold px-2 py-[2px] text-sm text-white">
          Premium
        </div>
      )}
      <div className="mb-3 text-base font-semibold">{title}</div>
      {image && (
        <div className="relative">
          <span className="mb-1 inline-block w-full">
            <Image
              src={image}
              alt="List Item Image"
              width={700}
              height={400}
              className={listType !== "models" ? "rounded-lg" : ""}
            />
          </span>
          {isModelPremium && (
            <div className="absolute right-3 top-3 inline-block rounded-lg bg-custom-gold px-2 py-[2px] text-sm text-white">
              Premium
            </div>
          )}
        </div>
      )}
      <p className="mb-4 text-sm">{text}</p>
      <div className="mb-5 flex gap-2">
        {categories.map((category) => (
          <span
            key={category}
            className="cursor-pointer rounded-lg bg-custom-gray-100 px-2 py-[2px] hover:bg-custom-gray-300 dark:bg-custom-black-500 dark:hover:bg-custom-black-300"
          >
            {category}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-3xl bg-custom-gray-100 dark:bg-custom-black-300">
          <button className="h-8 w-8 rounded-3xl border border-transparent p-[6px] transition-all hover:bg-custom-gray-300 dark:bg-custom-black-300 dark:hover:bg-custom-black-500">
            <Image
              src={
                theme === "dark" ? "/arrow-up-dark.svg" : "/arrow-up-light.svg"
              }
              alt="Arrow Up Icon"
              width={50}
              height={50}
            />
          </button>
          <span className="text-sm">{likesNumber}</span>
          <button className="h-8 w-8 rounded-3xl border border-transparent p-1 transition-all hover:bg-custom-gray-300 dark:bg-custom-black-300 dark:p-[6px] dark:hover:bg-custom-black-500">
            <Image
              src={
                theme === "dark"
                  ? "/arrow-down-dark.svg"
                  : "/arrow-down-light.svg"
              }
              alt="Arrow Down Icon"
              width={50}
              height={50}
            />
          </button>
        </div>
        {viewsNumber && (
          <div className="flex items-center gap-2 px-2 py-1">
            <span className="inline-block h-6 w-6">
              <Image
                src={theme === "dark" ? "/view-dark.svg" : "/view-light.svg"}
                alt="View Icon"
                width={50}
                height={50}
              />
            </span>
            <span className="text-sm">{viewsNumber}</span>
          </div>
        )}
        {downloadsNumber &&
          (canDownload ? (
            <Link
              href={`/files/${id}`}
              className="flex items-center gap-2 rounded-3xl bg-custom-gray-100 px-2 py-1 transition-all hover:bg-custom-gray-300 dark:bg-custom-black-300 dark:hover:bg-custom-black-300"
            >
              <span className="inline-block h-6 w-6">
                <Image
                  src={
                    theme === "dark"
                      ? "/download-dark.svg"
                      : "/download-light.svg"
                  }
                  alt="Download Icon"
                  width={50}
                  height={50}
                />
              </span>
              <span className="text-sm">{downloadsNumber}</span>
            </Link>
          ) : (
            <div className="flex items-center gap-2 px-2 py-1">
              <span className="inline-block h-6 w-6">
                <Image
                  src={
                    theme === "dark"
                      ? "/download-dark.svg"
                      : "/download-light.svg"
                  }
                  alt="Download Icon"
                  width={50}
                  height={50}
                />
              </span>
              <span className="text-sm">{downloadsNumber}</span>
            </div>
          ))}
        {canAddComment ? (
          <Link
            href={`/${listType}/${id}`}
            className="flex items-center gap-2 rounded-3xl bg-custom-gray-100 px-2 py-1 transition-all hover:bg-custom-gray-300 dark:bg-custom-black-300 dark:hover:bg-custom-black-300"
          >
            <span className="inline-block h-6 w-6">
              <Image
                src={
                  theme === "dark" ? "/comment-dark.svg" : "/comment-light.svg"
                }
                alt="Comment Icon"
                width={50}
                height={50}
              />
            </span>
            <span className="text-sm">{commentsNumber}</span>
          </Link>
        ) : (
          <div className="flex items-center gap-2 px-2 py-1">
            <span className="inline-block h-6 w-6">
              <Image
                src={
                  theme === "dark" ? "/comment-dark.svg" : "/comment-light.svg"
                }
                alt="Comment Icon"
                width={50}
                height={50}
              />
            </span>
            <span className="text-sm">{commentsNumber}</span>
          </div>
        )}
        <div className="relative">
          <button
            className="h-8 w-8 rounded-3xl bg-custom-gray-100 p-1 transition-all hover:bg-custom-gray-500 dark:bg-custom-black-300 dark:hover:bg-custom-black-300"
            onClick={() => {
              setShowItemShareModal((prevState) => !prevState);
            }}
          >
            <Image
              src={theme === "dark" ? "/share-dark.svg" : "/share-light.svg"}
              alt="Share Icon"
              width={50}
              height={50}
              className="rounded-full"
            />
          </button>
          {showItemShareModal && <ItemShareModal />}
        </div>
      </div>
    </div>
  );
}

export default ListItem;
