import PageLayout from "@/components/UI/Page-Layout/PageLayout";
import ModelsHeading from "./ModelsHeading";
import SidebarRightSort from "@/components/Sidebar-Right/SidebarRightSort";
import ModelsList from "./ModelsList";
import SidebarRightCategories from "@/components/Sidebar-Right/SidebarRightCategories";

function ModelsPageContent() {
  return (
    <PageLayout>
      <section className="lg:ml-[60px] lg:flex-1">
        <ModelsHeading />
        <div className="mb-6 px-4 lg:hidden">
          <SidebarRightSort />
        </div>
        <ModelsList />
        <div className="lg:hidden">
          <SidebarRightCategories />
        </div>
      </section>
    </PageLayout>
  );
}

export default ModelsPageContent;
