import AllOptionsModal from "./AllOptionsModal";
import LanguageOptionsModal from "./LanguageOptionsModal";

function HeaderModals({
  onCloseUserModal,
  showLanguageOptionsModal,
  onToggleLanguageOptionsModalVisibility,
}) {
  return (
    <>
      {showLanguageOptionsModal ? (
        <LanguageOptionsModal
          onToggleLanguageOptionsModalVisibility={
            onToggleLanguageOptionsModalVisibility
          }
        />
      ) : (
        <AllOptionsModal
          onCloseUserModal={onCloseUserModal}
          onToggleLanguageOptionsModalVisibility={
            onToggleLanguageOptionsModalVisibility
          }
        />
      )}
    </>
  );
}

export default HeaderModals;
