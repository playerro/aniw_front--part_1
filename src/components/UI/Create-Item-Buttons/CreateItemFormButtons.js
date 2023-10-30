"use client";

import { useRouter } from "next/navigation";

function CreateItemFormButtons() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="rounded-lg border border-custom-gray-500 bg-white px-10 py-3 text-base font-medium text-custom-gray-700 transition-all hover:bg-custom-gray-300 dark:border-custom-gray-700 dark:bg-custom-black-100 dark:hover:border-custom-gray-900"
        onClick={() => router.back()}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="rounded-lg bg-custom-blue-100 px-10 py-3 text-base font-medium text-white transition-all hover:bg-custom-blue-300"
      >
        Create
      </button>
    </div>
  );
}

export default CreateItemFormButtons;
