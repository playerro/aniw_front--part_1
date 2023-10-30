function SecuritySettingsPart() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
        <label htmlFor="phone" className="text-sm">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="+7 999 888 77 66"
          className="dark:bg-custom-black-500 w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:outline-none dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]"
        />
      </div>
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="test@gmail.com"
          className="dark:bg-custom-black-500 w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:outline-none dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]"
        />
      </div>
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
        <label htmlFor="username" className="text-sm">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="dark:bg-custom-black-500 w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:outline-none dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]"
        />
      </div>
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="********"
          className="dark:bg-custom-black-500 w-full rounded-lg border border-transparent bg-custom-gray-100 px-5 py-3 transition-all placeholder:text-base placeholder:text-custom-gray-700 hover:border-custom-gray-500 focus:outline-none dark:hover:border-custom-gray-700 dark:focus:border-custom-gray-700 lg:w-[492px]"
        />
      </div>
    </div>
  );
}

export default SecuritySettingsPart;
