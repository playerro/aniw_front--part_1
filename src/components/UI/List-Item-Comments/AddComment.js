function AddComment({ withCancelBtn, onCancelCommenting }) {
  return (
    <div>
      <textarea
        placeholder="Add comment"
        rows={4}
        className="mb-4 w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:border-custom-gray-500 focus:bg-white focus:outline-none dark:bg-custom-black-500 dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700"
      />
      <div className="flex items-center gap-3">
        {withCancelBtn && (
          <button
            className="rounded-lg border border-custom-gray-500 bg-white px-10 py-1 text-base font-medium text-custom-gray-700 transition-all hover:bg-custom-gray-300 dark:border-custom-gray-700 dark:bg-custom-black-100 dark:hover:border-custom-gray-900"
            onClick={() => onCancelCommenting()}
          >
            Cancel
          </button>
        )}
        <button className="rounded-lg bg-custom-blue-100 px-10 py-1 text-base font-medium text-white transition-all hover:bg-custom-blue-300">
          Send
        </button>
      </div>
    </div>
  );
}

export default AddComment;
