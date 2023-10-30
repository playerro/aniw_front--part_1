import SidebarLeft from "@/components/Sidebar-Left/SidebarLeft";
import SidebarRight from "@/components/Sidebar-Right/SidebarRight";

function PageLayout({ children }) {
  return (
    <main className="px-1 pb-10 pt-6 lg:flex lg:justify-between lg:gap-11 lg:px-10">
      <div className="hidden lg:block lg:w-[220px]">
        <SidebarLeft />
      </div>
      {children}
      <div className="hidden lg:block">
        <SidebarRight />
      </div>
    </main>
  );
}

export default PageLayout;
