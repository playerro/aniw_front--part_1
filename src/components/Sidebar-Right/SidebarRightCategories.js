const categories = [
  "Owerwatch 2",
  "Diablo 4",
  "World of Warcraft",
  "Hearthstone",
  "StarCraft 2",
];

function SidebarRightCategories() {
  return (
    <div className="dark:bg-custom-black-100 mt-6 rounded-xl bg-white px-4 py-3 lg:mt-0 lg:px-6 lg:py-5">
      <div className="mb-4 text-sm font-semibold">Categories</div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className="dark:bg-custom-black-500 dark:hover:bg-custom-black-300 rounded-lg bg-custom-gray-100 px-2 py-1 text-base transition-all hover:bg-custom-gray-300"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SidebarRightCategories;
