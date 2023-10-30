"use client";

import { useSelector } from "react-redux";
import ListItem from "@/components/UI/List-Item/ListItem";

function PostsList() {
  const posts = useSelector((state) => state.posts);

  return (
    <ul className="flex flex-col gap-4">
      {posts.map((post) => (
        <li key={post.id}>
          <ListItem listType="posts" itemContent={post} canAddComment={true} />
        </li>
      ))}
    </ul>
  );
}

export default PostsList;
