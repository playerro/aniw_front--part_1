"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

import NavigationButtons from "@/components/UI/PageItemsNavigation/NavigationButtons";
import ProfileSettingsPart from "./ProfileSettingsPart";
import LocationSettingsPart from "./LocationSettingsPart";
import SecuritySettingsPart from "./SecuritySettingsPart";
import NotificationsSettingsPart from "./NotificationsSettingsPart";

const navItems = [
  { title: "Profile", isActive: true },
  { title: "Location", isActive: false },
  { title: "Security", isActive: false },
  { title: "Notifications", isActive: false },
];

function ProfilePageContent() {
  const { theme } = useTheme();

  const [navigationItems, setNavigationItems] = useState(navItems);
  const [itemsToShow, setItemsToShow] = useState("Profile");

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
    <main className="dark:border-custom-black-300 dark:bg-custom-black-100 border-t border-custom-gray-300 bg-white px-5 pb-10 pt-6 lg:px-0">
      <section className="m-auto w-full max-w-[712px] ">
        <h1 className="mb-6 text-2xl font-semibold">Settings</h1>
        <NavigationButtons
          theme={theme}
          navigationItems={navigationItems}
          onChangeActiveItems={changeActiveItemsHandler}
        />
        <div className="dark:border-custom-black-300 border-t border-custom-gray-300 pt-6">
          {itemsToShow === "Profile" ? (
            <ProfileSettingsPart />
          ) : itemsToShow === "Location" ? (
            <LocationSettingsPart theme={theme} />
          ) : itemsToShow === "Security" ? (
            <SecuritySettingsPart />
          ) : (
            <NotificationsSettingsPart />
          )}
        </div>
      </section>
    </main>
  );
}

export default ProfilePageContent;
