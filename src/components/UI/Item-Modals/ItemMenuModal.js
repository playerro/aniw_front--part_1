function ItemMenuModal({ menuOptions }) {
  return (
    <ul className="dark:bg-custom-black-100 dark:border-custom-black-300 absolute right-0 top-10 z-50 rounded-xl border border-custom-gray-300 bg-white py-2">
      {menuOptions.map((option) => (
        <li
          key={option}
          className="dark:hover:bg-custom-black-300 cursor-pointer px-6 py-3 transition-all hover:bg-custom-gray-100"
          onClick={() => {}}
        >
          <button className="whitespace-nowrap text-base">{option}</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemMenuModal;
