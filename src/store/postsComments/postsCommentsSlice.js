const { createSlice } = require("@reduxjs/toolkit");

import CommentAvatar_1 from "@@@/comment-avatar_1.png";

const postsCommentsSlice = createSlice({
  name: "postsComments",
  initialState: [
    {
      postId: "post_1",
      comments: [
        {
          id: "comment_1",
          avatar: CommentAvatar_1,
          author: "Roelof Bekkenenks",
          date: "2023, 08, 19",
          time: "10:30",
          comment:
            "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
          likesNumber: 0,
          repliesNumber: 83,
          replies: [
            {
              commentId: "comment_1",
              id: "reply_1",
              avatar: CommentAvatar_1,
              author: "Gatsharan Sangrota",
              date: "2023, 08, 19",
              time: "10:30",
              comment:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
              repliesNumber: 83,
              replies: [],
            },
            {
              commentId: "comment_1",
              id: "reply_2",
              avatar: CommentAvatar_1,
              author: "Martín Abasto",
              date: "2023, 08, 19",
              time: "10:30",
              comment:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
              repliesNumber: 83,
              replies: [
                {
                  commentId: "comment_1",
                  id: "reply_1",
                  avatar: CommentAvatar_1,
                  author: "Gaspar Antunes",
                  date: "2023, 08, 19",
                  time: "10:30",
                  comment:
                    "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
                  likesNumber: 0,
                  repliesNumber: 83,
                  replies: [],
                },
                {
                  commentId: "comment_1",
                  replyId: "reply_1",
                  id: "subReply_2",
                  avatar: CommentAvatar_1,
                  author: "Sukhmeet Gorae",
                  date: "2023, 08, 19",
                  time: "10:30",
                  comment:
                    "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
                  likesNumber: 0,
                  repliesNumber: 83,
                  replies: [],
                },
              ],
            },
            {
              commentId: "comment_1",
              replyId: "reply_3",
              avatar: CommentAvatar_1,
              author: "Samuil Sadovsky",
              date: "2023, 08, 19",
              time: "10:30",
              comment:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
              repliesNumber: 83,
              replies: [],
            },
          ],
        },
        {
          id: "comment_2",
          avatar: CommentAvatar_1,
          author: "Fátima Cambeiro",
          date: "2023, 08, 19",
          time: "10:30",
          comment:
            "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
          likesNumber: 0,
          repliesNumber: 83,
          replies: [],
        },
      ],
    },
    {
      postId: "post_2",
      comments: [
        {
          id: "comment_1",
          avatar: CommentAvatar_1,
          author: "Roelof Bekkenenks",
          date: "2023, 08, 19",
          time: "10:30",
          comment:
            "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
          likesNumber: 0,
          repliesNumber: 83,
          replies: [
            {
              commentId: "comment_1",
              replyId: "reply_1",
              avatar: CommentAvatar_1,
              author: "Gatsharan Sangrota",
              date: "2023, 08, 19",
              time: "10:30",
              comment:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
              repliesNumber: 83,
              replies: [],
            },
            {
              commentId: "comment_1",
              replyId: "reply_2",
              avatar: CommentAvatar_1,
              author: "Martín Abasto",
              date: "2023, 08, 19",
              time: "10:30",
              comment:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
              repliesNumber: 83,
              replies: [
                {
                  commentId: "comment_1",
                  replyId: "reply_1",
                  subReplyId: "subReply_1",
                  avatar: CommentAvatar_1,
                  author: "Gaspar Antunes",
                  date: "2023, 08, 19",
                  time: "10:30",
                  comment:
                    "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
                  likesNumber: 0,
                  repliesNumber: 83,
                  replies: [],
                },
                {
                  commentId: "comment_1",
                  replyId: "reply_1",
                  subReplyId: "subReply_2",
                  avatar: CommentAvatar_1,
                  author: "Sukhmeet Gorae",
                  date: "2023, 08, 19",
                  time: "10:30",
                  comment:
                    "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
                  likesNumber: 0,
                  repliesNumber: 83,
                  replies: [],
                },
              ],
            },
            {
              commentId: "comment_1",
              replyId: "reply_3",
              avatar: CommentAvatar_1,
              author: "Samuil Sadovsky",
              date: "2023, 08, 19",
              time: "10:30",
              comment:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
              repliesNumber: 83,
              replies: [],
            },
          ],
        },
        {
          id: "comment_2",
          avatar: CommentAvatar_1,
          author: "Fátima Cambeiro",
          date: "2023, 08, 19",
          time: "10:30",
          comment:
            "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
          likesNumber: 0,
          repliesNumber: 83,
          replies: [],
        },
      ],
    },
    {
      postId: "post_3",
      comments: [
        {
          id: "comment_1",
          avatar: CommentAvatar_1,
          author: "Roelof Bekkenenks",
          date: "2023, 08, 19",
          time: "10:30",
          comment:
            "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
          likesNumber: 0,
          repliesNumber: 83,
          replies: [
            {
              commentId: "comment_1",
              replyId: "reply_1",
              avatar: CommentAvatar_1,
              author: "Gatsharan Sangrota",
              date: "2023, 08, 19",
              time: "10:30",
              comment:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
              repliesNumber: 83,
              replies: [],
            },
            {
              commentId: "comment_1",
              replyId: "reply_2",
              avatar: CommentAvatar_1,
              author: "Martín Abasto",
              date: "2023, 08, 19",
              time: "10:30",
              comment:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
              repliesNumber: 83,
              replies: [
                {
                  commentId: "comment_1",
                  replyId: "reply_1",
                  subReplyId: "subReply_1",
                  avatar: CommentAvatar_1,
                  author: "Gaspar Antunes",
                  date: "2023, 08, 19",
                  time: "10:30",
                  comment:
                    "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
                  likesNumber: 0,
                  repliesNumber: 83,
                  replies: [],
                },
                {
                  commentId: "comment_1",
                  replyId: "reply_1",
                  subReplyId: "subReply_2",
                  avatar: CommentAvatar_1,
                  author: "Sukhmeet Gorae",
                  date: "2023, 08, 19",
                  time: "10:30",
                  comment:
                    "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
                  likesNumber: 0,
                  repliesNumber: 83,
                  replies: [],
                },
              ],
            },
            {
              commentId: "comment_1",
              replyId: "reply_3",
              avatar: CommentAvatar_1,
              author: "Samuil Sadovsky",
              date: "2023, 08, 19",
              time: "10:30",
              comment:
                "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
              likesNumber: 0,
              repliesNumber: 83,
              replies: [],
            },
          ],
        },
        {
          id: "comment_2",
          avatar: CommentAvatar_1,
          author: "Fátima Cambeiro",
          date: "2023, 08, 19",
          time: "10:30",
          comment:
            "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
          likesNumber: 0,
          repliesNumber: 83,
          replies: [],
        },
      ],
    },
  ],
});

export default postsCommentsSlice.reducer;
