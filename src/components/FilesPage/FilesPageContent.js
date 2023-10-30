import PageLayout from "@/components/UI/Page-Layout/PageLayout";
import CreateItemHeading from "@/components/UI/Create-Item-Heading/CreateItemHeading";
import SidebarRightSort from "@/components/Sidebar-Right/SidebarRightSort";
import FilesList from "@/components/FilesPage/FilesList";
import SidebarRightCategories from "@/components/Sidebar-Right/SidebarRightCategories";

function FilesPageContent() {
  return (
    <PageLayout>
      <section className="lg:ml-[60px] lg:flex-1">
        <CreateItemHeading itemType="file" />
        <div className="mb-6 px-4 lg:hidden">
          <SidebarRightSort />
        </div>
        <FilesList />
        <div className="lg:hidden">
          <SidebarRightCategories />
        </div>
      </section>
    </PageLayout>
  );
}

export default FilesPageContent;
