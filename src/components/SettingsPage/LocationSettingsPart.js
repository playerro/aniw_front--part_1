import Image from "next/image";
import { useState } from "react";

const languageSelectOptionsList = ["English", "Item 2", "Item 3", "Item 4"];
const countrySelectOptionsList = ["Russia", "Item 2", "Item 3", "Item 4"];
const stateSelectOptionsList = ["Moscow", "Item 2", "Item 3", "Item 4"];
const citySelectOptionsList = ["Moscow", "Item 2", "Item 3", "Item 4"];

function LocationSettingsPart({ theme }) {
  const [languageSelectionIsActive, setLanguageSelectionIsActive] =
    useState(false);
  const [languageSelectedOption, setLanguageSelectedOption] =
    useState("English");

  const [countrySelectionIsActive, setCountrySelectionIsActive] =
    useState(false);
  const [countrySelectedOption, setCountrySelectedOption] = useState("Russia");

  const [stateSelectionIsActive, setStateSelectionIsActive] = useState(false);
  const [stateSelectedOption, setStateSelectedOption] = useState("Moscow");

  const [citySelectionIsActive, setCitySelectionIsActive] = useState(false);
  const [citySelectedOption, setCitySelectedOption] = useState("Moscow");

  function langueSelectOptionHandler(option) {
    setLanguageSelectedOption(option);
    setLanguageSelectionIsActive(false);
  }

  function countrySelectOptionHandler(option) {
    setCountrySelectedOption(option);
    setCountrySelectionIsActive(false);
  }

  function stateSelectOptionHandler(option) {
    setStateSelectedOption(option);
    setStateSelectionIsActive(false);
  }

  function citySelectOptionHandler(option) {
    setCitySelectedOption(option);
    setCitySelectionIsActive(false);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-2 lg:flex-row">
        <div className="text-sm lg:pt-3">Language</div>
        <div className="flex flex-col gap-1">
          <button
            role="combobox"
            aria-labelledby="select button"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-controls="select-dropdown"
            className="dark:bg-custom-black-500 flex w-full justify-between rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all hover:border-custom-gray-500 focus:border-custom-gray-500 focus:bg-white focus:outline-none dark:hover:border-custom-gray-700 lg:w-[492px]"
            onClick={() =>
              setLanguageSelectionIsActive((prevState) => !prevState)
            }
          >
            <span
              className={`text-base ${
                languageSelectionIsActive
                  ? "text-custom-gray-900"
                  : "text-custom-gray-700"
              }`}
            >
              {languageSelectedOption}
            </span>
            <span className="inline-block h-6 w-6">
              <Image
                src={
                  languageSelectionIsActive
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
          {languageSelectionIsActive && (
            <ul
              className="dark:bg-custom-black-100 dark:border-custom-black-300 rounded-xl border border-custom-gray-300 bg-white py-2"
              role="listbox"
              id="select-dropdown"
            >
              {languageSelectOptionsList.map((option) => (
                <li
                  key={option}
                  role="option"
                  aria-selected={
                    option === languageSelectedOption ? true : false
                  }
                  className={`dark:hover:bg-custom-black-300 flex cursor-pointer items-center gap-4 px-6 py-3 transition-all hover:bg-custom-gray-100 ${
                    option === languageSelectedOption &&
                    "dark:bg-custom-black-300 bg-custom-gray-100"
                  }`}
                  onClick={() => langueSelectOptionHandler(option)}
                >
                  <input type="radio" id={option} className="sr-only" />
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
      </div>
      <div className="flex flex-col justify-between gap-2 lg:flex-row">
        <div className="text-sm lg:pt-3">Country</div>
        <div className="flex flex-col gap-1">
          <button
            role="combobox"
            aria-labelledby="select button"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-controls="select-dropdown"
            className="dark:bg-custom-black-500 flex w-full justify-between rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all hover:border-custom-gray-500 focus:border-custom-gray-500 focus:bg-white focus:outline-none dark:hover:border-custom-gray-700 lg:w-[492px]"
            onClick={() =>
              setCountrySelectionIsActive((prevState) => !prevState)
            }
          >
            <span
              className={`text-base ${
                countrySelectionIsActive
                  ? "text-custom-gray-900"
                  : "text-custom-gray-700"
              }`}
            >
              {countrySelectedOption}
            </span>
            <span className="inline-block h-6 w-6">
              <Image
                src={
                  countrySelectionIsActive
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
          {countrySelectionIsActive && (
            <ul
              className="dark:bg-custom-black-100 dark:border-custom-black-300 rounded-xl border border-custom-gray-300 bg-white py-2"
              role="listbox"
              id="select-dropdown"
            >
              {countrySelectOptionsList.map((option) => (
                <li
                  key={option}
                  role="option"
                  aria-selected={
                    option === countrySelectedOption ? true : false
                  }
                  className={`dark:hover:bg-custom-black-300 flex cursor-pointer items-center gap-4 px-6 py-3 transition-all hover:bg-custom-gray-100 ${
                    option === countrySelectedOption &&
                    "dark:bg-custom-black-300 bg-custom-gray-100"
                  }`}
                  onClick={() => countrySelectOptionHandler(option)}
                >
                  <input type="radio" id={option} className="sr-only" />
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
      </div>
      <div className="flex flex-col justify-between gap-2 lg:flex-row">
        <div className="text-sm lg:pt-3">State</div>
        <div className="flex flex-col gap-1">
          <button
            role="combobox"
            aria-labelledby="select button"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-controls="select-dropdown"
            className="dark:bg-custom-black-500 flex w-full justify-between rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all hover:border-custom-gray-500 focus:border-custom-gray-500 focus:bg-white focus:outline-none dark:hover:border-custom-gray-700 lg:w-[492px]"
            onClick={() => setStateSelectionIsActive((prevState) => !prevState)}
          >
            <span
              className={`text-base ${
                stateSelectionIsActive
                  ? "text-custom-gray-900"
                  : "text-custom-gray-700"
              }`}
            >
              {stateSelectedOption}
            </span>
            <span className="inline-block h-6 w-6">
              <Image
                src={
                  stateSelectionIsActive
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
          {stateSelectionIsActive && (
            <ul
              className="dark:bg-custom-black-100 dark:border-custom-black-300 rounded-xl border border-custom-gray-300 bg-white py-2"
              role="listbox"
              id="select-dropdown"
            >
              {stateSelectOptionsList.map((option) => (
                <li
                  key={option}
                  role="option"
                  aria-selected={option === stateSelectedOption ? true : false}
                  className={`dark:hover:bg-custom-black-300 flex cursor-pointer items-center gap-4 px-6 py-3 transition-all hover:bg-custom-gray-100 ${
                    option === stateSelectedOption &&
                    "dark:bg-custom-black-300 bg-custom-gray-100"
                  }`}
                  onClick={() => stateSelectOptionHandler(option)}
                >
                  <input type="radio" id={option} className="sr-only" />
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
      </div>
      <div className="flex flex-col justify-between gap-2 lg:flex-row">
        <div className="text-sm lg:pt-3">City</div>
        <div className="flex flex-col gap-1">
          <button
            role="combobox"
            aria-labelledby="select button"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-controls="select-dropdown"
            className="dark:bg-custom-black-500 flex w-full justify-between rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all hover:border-custom-gray-500 focus:border-custom-gray-500 focus:bg-white focus:outline-none dark:hover:border-custom-gray-700 lg:w-[492px]"
            onClick={() => setCitySelectionIsActive((prevState) => !prevState)}
          >
            <span
              className={`text-base ${
                citySelectionIsActive
                  ? "text-custom-gray-900"
                  : "text-custom-gray-700"
              }`}
            >
              {citySelectedOption}
            </span>
            <span className="inline-block h-6 w-6">
              <Image
                src={
                  citySelectionIsActive
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
          {citySelectionIsActive && (
            <ul
              className="dark:bg-custom-black-100 dark:border-custom-black-300 rounded-xl border border-custom-gray-300 bg-white py-2"
              role="listbox"
              id="select-dropdown"
            >
              {citySelectOptionsList.map((option) => (
                <li
                  key={option}
                  role="option"
                  aria-selected={option === citySelectedOption ? true : false}
                  className={`dark:hover:bg-custom-black-300 flex cursor-pointer items-center gap-4 px-6 py-3 transition-all hover:bg-custom-gray-100 ${
                    option === citySelectedOption &&
                    "dark:bg-custom-black-300 bg-custom-gray-100"
                  }`}
                  onClick={() => citySelectOptionHandler(option)}
                >
                  <input type="radio" id={option} className="sr-only" />
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
      </div>
    </div>
  );
}

export default LocationSettingsPart;
