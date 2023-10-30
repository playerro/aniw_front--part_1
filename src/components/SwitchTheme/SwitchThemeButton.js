"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

function SwitchThemeButton({ onCloseUserModal }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let switchBtn = (
    <button
      className="h-8 w-8 rounded-3xl bg-custom-gray-100 p-1 transition-all hover:bg-custom-gray-300"
      onClick={() => {
        setTheme("dark");
        onCloseUserModal();
      }}
    >
      <Image
        src="/dark.svg"
        alt="Theme Icon"
        width={100}
        height={100}
        className="rounded-full"
      />
    </button>
  );

  if (theme === "dark") {
    switchBtn = (
      <button
        className="dark:bg-custom-black-300 dark:hover:bg-custom-black-500 h-8 w-8 rounded-3xl p-1 transition-all"
        onClick={() => {
          setTheme("light");
          onCloseUserModal();
        }}
      >
        <Image
          src="/light.svg"
          alt="Theme Icon"
          width={100}
          height={100}
          className="rounded-full"
        />
      </button>
    );
  }

  return <>{switchBtn}</>;
}

export default SwitchThemeButton;
