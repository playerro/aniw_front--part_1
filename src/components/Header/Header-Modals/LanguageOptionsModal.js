const languageOptions = ["English", "Russian"];

function LanguageOptionsModal({ onToggleLanguageOptionsModalVisibility }) {
  return (
    <div className="dark:bg-custom-black-100 dark:border-custom-black-300 w-[111px] rounded-xl border border-custom-gray-300 bg-white py-2">
      {languageOptions.map((language) => (
        <button
          key={language}
          className="dark:hover:bg-custom-black-300 w-full py-5 transition-all hover:bg-custom-gray-300"
          onClick={() => onToggleLanguageOptionsModalVisibility()}
        >
          {language}
        </button>
      ))}
    </div>
  );
}

export default LanguageOptionsModal;
