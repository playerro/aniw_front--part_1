import ProfilePageUserInfo from "./ProfilePageUserInfo";
import ProfilePageUserItems from "./ProfilePageUserItems";

function ProfilePageContent() {
  return (
    <main className="flex flex-col gap-6 pb-10 pt-6 lg:flex-row lg:justify-center lg:gap-[104px]">
      <ProfilePageUserInfo />
      <ProfilePageUserItems />
    </main>
  );
}

export default ProfilePageContent;
