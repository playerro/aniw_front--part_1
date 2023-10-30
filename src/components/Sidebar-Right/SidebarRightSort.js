"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";

const selectOptionsList = ["Item 1", "Item 2", "Item 3", "Item 4"];

function SidebarRightSort() {
  const { theme } = useTheme();
  const [selectionIsActive, setSelectionIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Voites");

  function selectOptionHandler(option) {
    setSelectedOption(option);
    setSelectionIsActive(false);
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="dark:bg-custom-black-100 flex items-center justify-between rounded-xl bg-white px-6 py-5">
        <div className="text-sm font-semibold">Sort</div>
        <button
          role="combobox"
          aria-labelledby="select button"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-controls="select-dropdown"
          className="flex items-center gap-2"
          onClick={() => setSelectionIsActive((prevState) => !prevState)}
        >
          <span
            className={`text-base hover:text-custom-gray-900 ${
              selectionIsActive && "text-custom-gray-900"
            }`}
          >
            {selectedOption}
          </span>
          <span className="inline-block h-6 w-6">
            <Image
              src={
                selectionIsActive
                  ? theme === "dark"
                    ? "/arrow-close-dark.svg"
                    : "/arrow-close-light.svg"
                  : theme === "dark"
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
      {selectionIsActive && (
        <ul
          className="dark:bg-custom-black-100 dark:border-custom-black-300 rounded-xl border border-custom-gray-300 bg-white py-2"
          role="listbox"
          id="select-dropdown"
        >
          {selectOptionsList.map((option) => (
            <li
              key={option}
              role="option"
              aria-selected={option === selectedOption ? true : false}
              className={`dark:hover:bg-custom-black-300 flex cursor-pointer items-center gap-4 px-6 py-3 transition-all hover:bg-custom-gray-100 ${
                option === selectedOption &&
                "dark:bg-custom-black-300 bg-custom-gray-100 "
              }`}
              onClick={() => selectOptionHandler(option)}
            >
              <input type="checkbox" id={option} className="sr-only" />
              <label
                htmlFor={option}
                className="w-full cursor-pointer text-base"
              >
                {option}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SidebarRightSort;
