"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

import NavigationButtons from "@/components/UI/PageItemsNavigation/NavigationButtons";
import PostsList from "@/components/HomePage/PostsList";
import FilesList from "@/components/FilesPage/FilesList";
import ModelsList from "@/components/ModelsPage/ModelsList";

const navItems = [
  { title: "Posts", isActive: true },
  { title: "Files", isActive: false },
  { title: "3D Models", isActive: false },
  { title: "About", isActive: false },
];

function ProfilePageUserItems() {
  const { theme } = useTheme();

  const [navigationItems, setNavigationItems] = useState(navItems);
  const [itemsToShow, setItemsToShow] = useState("Posts");

  function changeActiveItemsHandler(title) {
    setNavigationItems((prevState) =>
      prevState.map((item) =>
        item.title === title
          ? { ...item, isActive: true }
          : { ...item, isActive: false },
      ),
    );

    setItemsToShow(title);
  }

  return (
    <section className="dark:border-custom-black-300 w-full border-t border-custom-gray-300 px-1 pt-6 lg:w-[712px] lg:border-none lg:px-0 lg:pt-0">
      <NavigationButtons
        theme={theme}
        navigationItems={navigationItems}
        onChangeActiveItems={changeActiveItemsHandler}
      />
      {itemsToShow === "Posts" ? (
        <PostsList />
      ) : itemsToShow === "Files" ? (
        <FilesList />
      ) : itemsToShow === "3D Models" ? (
        <ModelsList />
      ) : (
        <div className="dark:bg-custom-black-100 rounded-xl bg-white px-6 py-5">
          Games are sometimes played purely for enjoyment, sometimes for
          achievement or reward as well. They can be played alone, in teams, or
          online; by amateurs or by professionals. On the other hand, players in
          a game may constitute their own audience as they take their turn to
          play.
        </div>
      )}
    </section>
  );
}

export default ProfilePageUserItems;
