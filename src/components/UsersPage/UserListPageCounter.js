import Image from "next/image";

function UserListPageCounter({ theme }) {
  return (
    <div className="flex items-center justify-center gap-5">
      <button className="h-8 w-8 rounded-full bg-white p-1 transition-all hover:bg-custom-gray-300 dark:bg-custom-black-100 dark:hover:bg-custom-black-300">
        <Image
          src={
            theme === "dark" ? "/arrow-left-dark.svg" : "/arrow-left-light.svg"
          }
          alt="Arrow Left Icon"
          width={70}
          height={70}
        />
      </button>
      <div className="text-base">1-24 of 74</div>
      <button className="h-8 w-8 rounded-full bg-white p-1 transition-all hover:bg-custom-gray-300 dark:bg-custom-black-100 dark:hover:bg-custom-black-300">
        <Image
          src={
            theme === "dark"
              ? "/arrow-right-dark.svg"
              : "/arrow-right-light.svg"
          }
          alt="Arrow Right Icon"
          width={70}
          height={70}
        />
      </button>
    </div>
  );
}

export default UserListPageCounter;
