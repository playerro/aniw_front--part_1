import SidebarRightSort from "./SidebarRightSort";
import SidebarRightCategories from "./SidebarRightCategories";

function SidebarRight() {
  return (
    <div className="flex w-[280px] flex-col gap-4">
      <SidebarRightSort />
      <SidebarRightCategories />
    </div>
  );
}

export default SidebarRight;
