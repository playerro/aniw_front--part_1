"use client";

import { useSelector } from "react-redux";

function ModelsHeading() {
  const { categories, tags } = useSelector((state) => state.models);

  return (
    <div className="mb-6 rounded-xl bg-white px-6 py-5 dark:bg-custom-black-100">
      <h1 className="mb-3 text-2xl font-semibold">3D Models</h1>
      <p className="font-sm mb-4">
        Games are sometimes played purely for enjoyment, sometimes for
        achievement or reward as well. They can be played alone, in teams, or
        online; by amateurs or by professionals. On the other hand, players in a
        game may constitute their own audience as they take their turn to play.
      </p>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {categories.map((category, i) => (
          <span
            key={category + i}
            className="rounded-lg bg-custom-gray-100 px-2 py-1 text-base hover:bg-custom-gray-500 dark:bg-custom-black-500 dark:hover:bg-custom-black-300"
          >
            {category}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag, i) => (
          <span
            key={tag + i}
            className="rounded-lg bg-custom-gray-100 px-2 py-[2px] text-sm hover:bg-custom-gray-500 dark:bg-custom-black-500 dark:hover:bg-custom-black-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ModelsHeading;
