import Image from "next/image";

function UsersListMobileItem({ user }) {
  const { avatar, isAdmin, nickName, fullName, createdAt, country } = user;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="rounded-xl bg-white px-4 py-3 dark:bg-custom-black-100">
      <div className="flex items-start gap-3 border-b border-custom-gray-300 pb-3 dark:border-custom-black-300">
        <span className="inline-block h-12 w-12">
          <Image src={avatar} alt="User Image" width={200} height={200} />
        </span>
        <div>
          <p className="text-base font-semibold">{fullName}</p>
          <p className="text-base">{nickName}</p>
        </div>
        {isAdmin && (
          <div className="ml-auto rounded-lg bg-custom-gray-100 px-2 py-[2px] text-sm dark:bg-custom-black-300">
            Admin
          </div>
        )}
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between text-base">
          <span className="font-medium">Created at</span>
          <span className="font-medium">{formattedDate}</span>
        </div>
        <div className="flex items-center justify-between text-base">
          <span className="font-medium">Country</span>
          <span className="font-medium">{country}</span>
        </div>
      </div>
    </div>
  );
}

export default UsersListMobileItem;
