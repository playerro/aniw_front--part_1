import Link from "next/link";

import SwitchThemeButton from "@/components/SwitchTheme/SwitchThemeButton";

function AllOptionsModal({
  onCloseUserModal,
  onToggleLanguageOptionsModalVisibility,
}) {
  return (
    <div className="dark:border-custom-black-300 dark:bg-custom-black-100 w-[136px] rounded-xl border border-custom-gray-300 bg-white py-5">
      <div className="dark:border-custom-black-300 flex items-center gap-2 border-b border-custom-gray-300 px-6 pb-[15px]">
        <button
          className="dark:bg-custom-black-300 dark:hover:bg-custom-black-500 rounded-3xl bg-custom-gray-100 px-3 py-1 transition-all hover:bg-custom-gray-300"
          onClick={() => onToggleLanguageOptionsModalVisibility()}
        >
          EN
        </button>
        <SwitchThemeButton onCloseUserModal={onCloseUserModal} />
      </div>
      <div className="dark:border-custom-black-300 flex flex-col border-b border-custom-gray-300 py-3">
        <Link
          href="/profile"
          className="dark:hover:bg-custom-black-300 px-6 py-3 text-base transition-all hover:bg-custom-gray-100"
          onClick={onCloseUserModal}
        >
          Profile
        </Link>
        <Link
          href="/settings"
          className="dark:hover:bg-custom-black-300 px-6 py-3 text-base transition-all hover:bg-custom-gray-100"
          onClick={onCloseUserModal}
        >
          Settings
        </Link>
      </div>
      <button className="w-full justify-start px-6 pt-6 text-base text-custom-gray-700 hover:text-custom-gray-900">
        Log Out
      </button>
    </div>
  );
}

export default AllOptionsModal;
