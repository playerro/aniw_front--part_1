"use client";

import { useSelector } from "react-redux";

import PageLayout from "@/components/UI/Page-Layout/PageLayout";
import ListItem from "@/components/UI/List-Item/ListItem";
import ListItemComments from "@/components/UI/List-Item-Comments/ListItemComments";
import SidebarRightCategories from "@/components/Sidebar-Right/SidebarRightCategories";

function PostItemCommentsPageContent({ id }) {
  const posts = useSelector((state) => state.posts);
  const postItem = posts.filter((post) => post.id === id)[0];

  return (
    <PageLayout>
      <section className="lg:ml-[60px] lg:flex-1">
        <ListItem
          listType="posts"
          itemContent={postItem}
          canAddComment={false}
        />
        <ListItemComments listType="posts" itemId={id} />
        <div className="lg:hidden">
          <SidebarRightCategories />
        </div>
      </section>
    </PageLayout>
  );
}

export default PostItemCommentsPageContent;
