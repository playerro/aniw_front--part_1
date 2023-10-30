"use client";

import { useState } from "react";
import Image from "next/image";

import googleIcon from "@@@/google.svg";
import telegramIcon from "@@@/telegram.svg";
import vkIcon from "@@@/vk.svg";
import facebookIcon from "@@@/facebook.svg";
import discordIcon from "@@@/discord.svg";
import redditIcon from "@@@/reddit.svg";
import gitHubIcon from "@@@/gitHub.svg";

const socialMediaIcons = [
  googleIcon,
  telegramIcon,
  vkIcon,
  facebookIcon,
  discordIcon,
];
const socialMediaIconsMore = [redditIcon, gitHubIcon];

function ItemShareModal() {
  const [showMoreIcons, setShowMoreIcons] = useState(false);

  return (
    <div className="dark:bg-custom-black-100 dark:border-custom-black-300 absolute -right-12 top-10 z-40 rounded-xl border border-custom-gray-300 bg-white px-4 py-4 lg:px-6 lg:py-5">
      <button className="mb-4 w-full rounded-lg border border-black py-2 text-base font-medium transition-all hover:text-custom-gray-700 dark:border-custom-gray-900 lg:mb-6 lg:py-3">
        Copy link
      </button>
      <div className="mb-4 flex items-center gap-4">
        {socialMediaIcons.map((icon, i) => (
          <span
            key={i + 1}
            className="inline-block h-8 w-8 cursor-pointer transition-all hover:scale-110 lg:h-12 lg:w-12"
          >
            <Image
              src={icon}
              alt="Social Media Icon"
              width={100}
              height={100}
            />
          </span>
        ))}
      </div>
      {showMoreIcons ? (
        <div className="flex items-center justify-center gap-4">
          {socialMediaIconsMore.map((icon, i) => (
            <span
              key={i + 1}
              className="inline-block h-8 w-8 cursor-pointer transition-all hover:scale-110 lg:h-12 lg:w-12"
            >
              <Image
                src={icon}
                alt="Social Media Icon"
                width={100}
                height={100}
              />
            </span>
          ))}
        </div>
      ) : (
        <button
          className="w-full text-sm text-custom-gray-700 transition-all hover:scale-105 hover:text-custom-gray-900"
          onClick={() => setShowMoreIcons(true)}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default ItemShareModal;
