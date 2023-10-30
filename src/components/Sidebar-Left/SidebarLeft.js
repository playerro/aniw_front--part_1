import Image from "next/image";
import Link from "next/link";

function SidebarLeft({ theme, onHideMobileMenu }) {
  return (
    <div className="flex flex-col gap-6 px-5 py-6 lg:px-0 lg:py-0">
      <button className="w-full rounded-xl border border-black py-3 text-base font-medium transition-all hover:text-custom-gray-700 dark:border-custom-gray-900">
        Create +
      </button>
      <div className="dark:border-custom-black-300 flex flex-col gap-6 border-y border-custom-gray-300 py-6">
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={theme === "dark" ? "/posts-dark.svg" : "/posts-light.svg"}
              alt="Posts Icon"
              width={50}
              height={50}
            />
          </span>
          <Link
            href="/"
            onClick={onHideMobileMenu}
            className="text-base transition-all hover:text-custom-gray-700"
          >
            Posts
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={theme === "dark" ? "/files-dark.svg" : "/files-light.svg"}
              alt="Files Icon"
              width={50}
              height={50}
            />
          </span>
          <Link
            href="/files"
            onClick={onHideMobileMenu}
            className="text-base transition-all hover:text-custom-gray-700"
          >
            Files
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-block h-6 w-6">
            <Image
              src={theme === "dark" ? "/3d-dark.svg" : "/3d-light.svg"}
              alt="3D Models Icon"
              width={50}
              height={50}
            />
          </span>
          <Link
            href="/3d-models"
            onClick={onHideMobileMenu}
            className="text-base transition-all hover:text-custom-gray-700"
          >
            3D Models
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="inline-block h-6 w-6">
          <Image
            src={theme === "dark" ? "/users-dark.svg" : "/users-light.svg"}
            alt="User Icon"
            width={50}
            height={50}
          />
        </span>
        <Link
          href="/users"
          onClick={onHideMobileMenu}
          className="text-base transition-all hover:text-custom-gray-700"
        >
          Users
        </Link>
      </div>
    </div>
  );
}

export default SidebarLeft;
