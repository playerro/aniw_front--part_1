"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import CommentsListItem from "./CommentsListItem";
import AddComment from "./AddComment";

function CommentsList({ comments }) {
  const { theme } = useTheme();
  const [addComment, setAddComment] = useState(false);

  return (
    <ul className="mt-6 flex flex-col gap-6">
      {comments.map((comment, i) => (
        <li
          key={comment.id + i}
          className="border-t border-custom-gray-300 pt-6 dark:border-custom-black-300"
        >
          <CommentsListItem
            theme={theme}
            itemContent={comment}
            onToggleCommenting={() => setAddComment((prevState) => !prevState)}
          />
          {addComment && (
            <div className="mt-6">
              <AddComment
                withCancelBtn={true}
                onCancelCommenting={() => setAddComment(false)}
              />
            </div>
          )}
          {comment.replies && comment.replies.length > 0 && (
            <div className="ml-4 mt-6 lg:ml-6">
              <CommentsList
                comments={comment.replies}
                onToggleCommenting={() =>
                  setAddComment((prevState) => !prevState)
                }
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default CommentsList;
