"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import CreateItemFormButtons from "../UI/Create-Item-Buttons/CreateItemFormButtons";

const categories = ["StarCraft 2", "Diablo 4"];

function CreatePostForm() {
  const { theme } = useTheme();
  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex flex-col gap-6 border-y border-custom-gray-300 py-6 dark:border-custom-black-300">
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
          <label htmlFor="title" className="text-sm">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:outline-none dark:bg-custom-black-500 dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]"
          />
        </div>
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          <label htmlFor="descriptions" className="pt-3 text-sm">
            Descriptions
          </label>
          <textarea
            rows={3}
            id="descriptions"
            placeholder="Descriptions"
            className="w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:outline-none dark:bg-custom-black-500 dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]"
          />
        </div>
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
          <label htmlFor="images" className="text-sm">
            Images
          </label>
          <input
            type="file"
            multiple
            id="images"
            className="w-full rounded-lg border border-custom-gray-500 bg-white px-5 py-3 placeholder:text-base dark:border-custom-gray-700 dark:bg-custom-black-500 lg:w-[492px]"
          />
        </div>
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
          <label htmlFor="files" className="text-sm">
            Files
          </label>
          <input
            type="file"
            multiple
            id="files"
            className="w-full rounded-lg border border-custom-gray-500 bg-white px-5 py-3 placeholder:text-base dark:border-custom-gray-700 dark:bg-custom-black-500 lg:w-[492px]"
          />
        </div>
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
          <label htmlFor="categories" className="text-sm">
            File type
          </label>
          <div className="w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:outline-none dark:bg-custom-black-500 dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]">
            <div className="flex justify-between">
              <span className="text-base text-custom-gray-700">File type</span>
              <button>
                <span className="inline-block h-6 w-6">
                  <Image
                    src={
                      theme === "dark"
                        ? "/arrow-open-dark.svg"
                        : "/arrow-open-light.svg"
                    }
                    alt="Arrow Icon"
                    width={50}
                    height={50}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
          <label htmlFor="categories" className="text-sm">
            Tools
          </label>
          <div className="w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:outline-none dark:bg-custom-black-500 dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]">
            <div className="flex justify-between">
              <span className="text-base text-custom-gray-700">Tools</span>
              <button>
                <span className="inline-block h-6 w-6">
                  <Image
                    src={
                      theme === "dark"
                        ? "/arrow-open-dark.svg"
                        : "/arrow-open-light.svg"
                    }
                    alt="Arrow Icon"
                    width={50}
                    height={50}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
          <label htmlFor="categories" className="text-sm">
            Categories
          </label>
          <div className="w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:outline-none dark:bg-custom-black-500 dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]">
            <div className="flex justify-between">
              <span className="text-base text-custom-gray-700">Categories</span>
              <button>
                <span className="inline-block h-6 w-6">
                  <Image
                    src={
                      theme === "dark"
                        ? "/arrow-open-dark.svg"
                        : "/arrow-open-light.svg"
                    }
                    alt="Arrow Icon"
                    width={50}
                    height={50}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 whitespace-nowrap lg:flex-row lg:items-center">
          <label htmlFor="tags" className="text-sm">
            Tags
          </label>
          <div className="w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:outline-none dark:bg-custom-black-500 dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]">
            <div className="flex gap-3">
              <div className="flex items-center gap-2">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center rounded-lg bg-white px-2 py-[2px] text-base dark:bg-custom-black-300 dark:hover:bg-custom-black-500"
                  >
                    <span className="text-sm">{category}</span>
                    <button className="inline-block h-5 w-5 p-[2px] transition-all hover:p-0">
                      <Image
                        src={
                          theme === "dark"
                            ? "/close-light.svg"
                            : "/close-dark.svg"
                        }
                        alt="Close Icon"
                        width={50}
                        height={50}
                      />
                    </button>
                  </div>
                ))}
              </div>
              <button className="text-base text-custom-gray-700">
                Add tags
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
          <label htmlFor="categories" className="text-sm">
            Price
          </label>
          <div className="w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:outline-none dark:bg-custom-black-500 dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]">
            <div className="flex justify-between">
              <span className="text-base text-custom-gray-700">Premium</span>
              <button>
                <span className="inline-block h-6 w-6">
                  <Image
                    src={
                      theme === "dark"
                        ? "/arrow-open-dark.svg"
                        : "/arrow-open-light.svg"
                    }
                    alt="Arrow Icon"
                    width={50}
                    height={50}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="ml-auto flex w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all hover:border-custom-gray-500 dark:bg-custom-black-500 dark:hover:border-custom-gray-700 lg:w-[492px]">
          <div className="flex-1 border-r border-custom-gray-300 text-base text-custom-gray-700 dark:border-custom-black-300">
            0.00
          </div>
          <div className="flex flex-1 justify-between pl-5">
            <span className="text-base text-custom-gray-700">Premium</span>
            <button>
              <span className="inline-block h-6 w-6">
                <Image
                  src={
                    theme === "dark"
                      ? "/arrow-open-dark.svg"
                      : "/arrow-open-light.svg"
                  }
                  alt="Arrow Icon"
                  width={50}
                  height={50}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
      <CreateItemFormButtons />
    </form>
  );
}

export default CreatePostForm;
