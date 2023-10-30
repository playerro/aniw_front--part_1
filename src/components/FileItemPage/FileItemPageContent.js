"use client";

import { useTheme } from "next-themes";
import { useSelector } from "react-redux";

import SidebarLeft from "../Sidebar-Left/SidebarLeft";
import FileItem from "./FileItem";
import SidebarRightCategories from "@/components/Sidebar-Right/SidebarRightCategories";
import SidebarRightDownloadFile from "../Sidebar-Right/SidebarRightDownloadFile";

function FileItemPageContent({ id }) {
  const { theme } = useTheme();

  const files = useSelector((state) => state.files);
  const fileItem = files.filter((file) => file.id === id)[0];

  return (
    <main className="px-1 pb-10 pt-6 lg:flex lg:justify-between lg:gap-11 lg:px-10">
      <div className="hidden lg:block lg:w-[220px]">
        <SidebarLeft />
      </div>
      <section className="lg:ml-[60px] lg:flex-1">
        <FileItem theme={theme} fileItem={fileItem} canAddComment={false} />
        <div className="lg:hidden">
          <SidebarRightCategories />
        </div>
      </section>
      <div className="hidden w-[280px] flex-col gap-4 lg:flex">
        <SidebarRightDownloadFile />
        <SidebarRightCategories />
      </div>
    </main>
  );
}

export default FileItemPageContent;
