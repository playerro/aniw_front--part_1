"use client";

import { useState } from "react";
import Image from "next/image";

import ItemMenuModal from "../Item-Modals/ItemMenuModal";
import ItemShareModal from "../Item-Modals/ItemShareModal";

function CommentsListItem({ theme, itemContent, onToggleCommenting }) {
  const [showItemMenuModal, setShowItemMenuModal] = useState(false);
  const [showItemShareModal, setShowItemShareModal] = useState(false);

  const {
    avatar,
    author,
    date,
    time,
    comment,
    likesNumber,
    repliesNumber,
    replies,
  } = itemContent;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="">
      <div className="mb-3 flex items-center gap-3 whitespace-nowrap">
        <span className="inline-block h-6 w-6">
          <Image src={avatar} alt="Avatar Img" width={70} height={70} />
        </span>
        <div className="items-center gap-2 lg:flex">
          <p className="text-sm">{author}</p>
          <p className="text-sm text-custom-gray-700">
            {formattedDate} {time}
          </p>
        </div>
        <div className="relative ml-auto">
          <button
            className={`h-8 w-8 rounded-3xl p-1 hover:bg-custom-gray-100 dark:hover:bg-custom-black-300 ${
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
      <p className="mb-4 text-sm">{comment}</p>
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
        <div className="flex items-center gap-2 rounded-3xl px-2 py-1 dark:bg-custom-black-300">
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
          <span className="text-sm">{repliesNumber}</span>
        </div>
        <button
          className="rounded-3xl bg-custom-gray-100 px-3 py-[6px] transition-all hover:bg-custom-gray-300 dark:bg-custom-black-300 dark:hover:bg-custom-black-500"
          onClick={() => onToggleCommenting()}
        >
          Reply
        </button>
        <div className="relative">
          <button
            className="h-8 w-8 rounded-3xl bg-custom-gray-100 p-1 transition-all hover:bg-custom-gray-300 dark:bg-custom-black-300 dark:hover:bg-custom-black-500"
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

export default CommentsListItem;
