"use client";

import { useSelector } from "react-redux";

import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

function ListItemComments({ listType, itemId }) {
  const commentsList = useSelector((state) =>
    listType === "posts" ? state.postsComments : state.filesComments,
  );
  const itemComments = commentsList.filter((comment) =>
    listType === "posts"
      ? comment.postId === itemId
      : comment.fileId === itemId,
  )[0].comments;

  return (
    <div className="mt-3 rounded-xl bg-white px-4 py-3 dark:bg-custom-black-100 lg:mt-4 lg:px-6 lg:py-5">
      <AddComment withCancelBtn={false} />
      <CommentsList comments={itemComments} />
    </div>
  );
}

export default ListItemComments;
