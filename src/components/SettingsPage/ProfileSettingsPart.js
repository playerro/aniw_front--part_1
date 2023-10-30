"use client";

import { useState } from "react";

const gendersToChoose = [
  { id: "female", title: "Female", isActive: true },
  { id: "male", title: "Male", isActive: false },
];

function ProfileSettingsPart() {
  const [genders, setGenders] = useState(gendersToChoose);

  function changeActiveGenderHandler(id) {
    setGenders((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? { ...item, isActive: true }
          : { ...item, isActive: false },
      ),
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
        <label htmlFor="fullname" className="text-sm">
          Fullname
        </label>
        <input
          type="text"
          id="fullname"
          placeholder="Lucas Pacheco"
          className="dark:bg-custom-black-500 w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:outline-none dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]"
        />
      </div>
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
        <label htmlFor="birthday" className="text-sm">
          Birthday
        </label>
        <input
          type="date"
          id="birthday"
          className="dark:bg-custom-black-500 w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 hover:border-custom-gray-500 focus:outline-none dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]"
        />
      </div>
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
        <div className="text-sm">Gender</div>
        <div className="flex w-full items-center justify-between gap-3 lg:w-[492px]">
          {genders.map((gender) => (
            <div
              key={gender.id}
              onClick={() => changeActiveGenderHandler(gender.id)}
              className={`dark:bg-custom-black-500 w-1/2 cursor-pointer rounded-lg border bg-custom-gray-100 py-3 text-center text-base transition-all dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 ${
                gender.isActive
                  ? "border-black text-black dark:border-white dark:text-white"
                  : "border-transparent text-custom-gray-700 hover:border-custom-gray-700"
              }`}
            >
              {gender.title}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
        <label htmlFor="about" className="text-sm">
          About
        </label>
        <input
          type="text"
          id="about"
          placeholder="About"
          className="dark:bg-custom-black-500 w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:outline-none dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]"
        />
      </div>
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
        <label htmlFor="signature" className="text-sm">
          Signature
        </label>
        <input
          type="text"
          id="signature"
          placeholder="Signature"
          className="dark:bg-custom-black-500 w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:outline-none dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]"
        />
      </div>
    </div>
  );
}

export default ProfileSettingsPart;
