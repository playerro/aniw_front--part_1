import React from "react";

function NavigationButtons({ theme, navigationItems, onChangeActiveItems }) {
  return (
    <div className="mb-6 flex items-center gap-6 whitespace-nowrap px-4 lg:px-0">
      {navigationItems.map((item) => (
        <button
          key={item.title}
          className={`rounded-xl border border-transparent px-2 py-1 text-base font-medium transition-all ${
            item.isActive
              ? theme === "dark"
                ? "bg-white text-black"
                : "bg-black text-white"
              : theme === "dark"
              ? "hover:border-white"
              : "text-black hover:border-black"
          }`}
          onClick={() => onChangeActiveItems(item.title)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}

export default NavigationButtons;
