function NotificationsSettingsPart() {
  return (
    <div className="w-full ">
      <div className="dark:border-custom-black-300 mb-6 border-b border-custom-gray-300 pb-10">
        <h3 className="mb-8 text-base font-semibold">Messages</h3>
        <div className="flex max-w-[270px] flex-col gap-10">
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Email</span>
            <label
              htmlFor="email"
              className="dark:bg-custom-black-500 relative h-8 w-12 cursor-pointer rounded-full bg-custom-gray-100"
            >
              <input type="checkbox" id="email" className="peer sr-only" />
              <span className="peer-checked:bg-custom-blue-100 absolute left-1 top-1 h-6 w-6 rounded-full bg-custom-gray-700 transition-all peer-checked:left-5" />
            </label>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Push</span>
            <label
              htmlFor="push"
              className="dark:bg-custom-black-500 relative h-8 w-12 cursor-pointer rounded-full bg-custom-gray-100"
            >
              <input
                type="checkbox"
                id="push"
                className="peer sr-only"
                defaultChecked={true}
              />
              <span className="peer-checked:bg-custom-blue-100 absolute left-1 top-1 h-6 w-6 rounded-full bg-custom-gray-700 transition-all peer-checked:left-5" />
            </label>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-8 text-base font-semibold">Activity</h3>
        <div className="flex max-w-[270px] flex-col gap-10">
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Community alerts</span>
            <label
              htmlFor="communityAlerts"
              className="dark:bg-custom-black-500 relative h-8 w-12 cursor-pointer rounded-full bg-custom-gray-100"
            >
              <input
                type="checkbox"
                defaultChecked={true}
                id="communityAlerts"
                className="peer sr-only"
              />
              <span className="peer-checked:bg-custom-blue-100 absolute left-1 top-1 h-6 w-6 rounded-full bg-custom-gray-700 transition-all peer-checked:left-5" />
            </label>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Comments on your posts</span>
            <label
              htmlFor="CommentsOnYourPosts"
              className="dark:bg-custom-black-500 relative h-8 w-12 cursor-pointer rounded-full bg-custom-gray-100"
            >
              <input
                type="checkbox"
                id="CommentsOnYourPosts"
                className="peer sr-only"
                defaultChecked={true}
              />
              <span className="peer-checked:bg-custom-blue-100 absolute left-1 top-1 h-6 w-6 rounded-full bg-custom-gray-700 transition-all peer-checked:left-5" />
            </label>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Upvotes on your posts</span>
            <label
              htmlFor="UpvotesOnYurPosts"
              className="dark:bg-custom-black-500 relative h-8 w-12 cursor-pointer rounded-full bg-custom-gray-100"
            >
              <input
                type="checkbox"
                id="UpvotesOnYurPosts"
                className="peer sr-only"
              />
              <span className="peer-checked:bg-custom-blue-100 absolute left-1 top-1 h-6 w-6 rounded-full bg-custom-gray-700 transition-all peer-checked:left-5" />
            </label>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Upvotes on your comments</span>
            <label
              htmlFor="UpvotesOnYourComments"
              className="dark:bg-custom-black-500 relative h-8 w-12 cursor-pointer rounded-full bg-custom-gray-100"
            >
              <input
                type="checkbox"
                id="UpvotesOnYourComments"
                className="peer sr-only"
              />
              <span className="peer-checked:bg-custom-blue-100 absolute left-1 top-1 h-6 w-6 rounded-full bg-custom-gray-700 transition-all peer-checked:left-5" />
            </label>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Replies to your comments</span>
            <label
              htmlFor="RepliesToYourComments"
              className="dark:bg-custom-black-500 relative h-8 w-12 cursor-pointer rounded-full bg-custom-gray-100"
            >
              <input
                type="checkbox"
                id="RepliesToYourComments"
                className="peer sr-only"
              />
              <span className="peer-checked:bg-custom-blue-100 absolute left-1 top-1 h-6 w-6 rounded-full bg-custom-gray-700 transition-all peer-checked:left-5" />
            </label>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Downloads of your products</span>
            <label
              htmlFor="DownloadsOfYourProducts"
              className="dark:bg-custom-black-500 relative h-8 w-12 cursor-pointer rounded-full bg-custom-gray-100"
            >
              <input
                type="checkbox"
                id="DownloadsOfYourProducts"
                className="peer sr-only"
                defaultChecked={true}
              />
              <span className="peer-checked:bg-custom-blue-100 absolute left-1 top-1 h-6 w-6 rounded-full bg-custom-gray-700 transition-all peer-checked:left-5" />
            </label>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Purchase of your products</span>
            <label
              htmlFor="PurchaseOfYourProducts"
              className="dark:bg-custom-black-500 relative h-8 w-12 cursor-pointer rounded-full bg-custom-gray-100"
            >
              <input
                type="checkbox"
                id="PurchaseOfYourProducts"
                className="peer sr-only"
              />
              <span className="peer-checked:bg-custom-blue-100 absolute left-1 top-1 h-6 w-6 rounded-full bg-custom-gray-700 transition-all peer-checked:left-5" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsSettingsPart;
