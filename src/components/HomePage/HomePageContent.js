import PageLayout from "@/components/UI/Page-Layout/PageLayout";
import CreateItemHeading from "@/components/UI/Create-Item-Heading/CreateItemHeading";
import SidebarRightSort from "@/components/Sidebar-Right/SidebarRightSort";
import PostsList from "@/components/HomePage/PostsList";
import SidebarRightCategories from "@/components/Sidebar-Right/SidebarRightCategories";

function HomePageContent() {
  return (
    <PageLayout>
      <section className="lg:ml-[60px] lg:flex-1">
        <CreateItemHeading itemType="post" />
        <div className="mb-6 px-4 lg:hidden">
          <SidebarRightSort />
        </div>
        <PostsList />
        <div className="lg:hidden">
          <SidebarRightCategories />
        </div>
      </section>
    </PageLayout>
  );
}

export default HomePageContent;
