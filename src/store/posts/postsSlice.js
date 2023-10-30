import { createSlice } from "@reduxjs/toolkit";

import PostAvatar_1 from "@@@/post-avatar_1.png";
import PostImage_1 from "@@@/post-image_1.png";

const postSlice = createSlice({
  name: "posts",
  initialState: [
    {
      id: "post_1",
      avatar: PostAvatar_1,
      author: "Lucas Pacheco",
      date: "2023, 08, 19",
      time: "10:30",
      title: "A game is a form of play goals and structure",
      image: "",
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
      categories: ["StarCraft 2", "Diablo 4"],
      likesNumber: 0,
      viewsNumber: 83,
      commentsNumber: 83,
    },
    {
      id: "post_2",
      avatar: PostAvatar_1,
      author: "Lucas Pacheco",
      date: "2023, 08, 19",
      time: "10:30",
      title: "A game is a form of play goals and structure",
      image: PostImage_1,
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
      categories: ["StarCraft 2", "Diablo 4"],
      likesNumber: 0,
      viewsNumber: 83,
      commentsNumber: 83,
    },
    {
      id: "post_3",
      avatar: PostAvatar_1,
      author: "Lucas Pacheco",
      date: "2023, 08, 19",
      time: "10:30",
      title: "A game is a form of play goals and structure",
      image: "",
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
      categories: ["StarCraft 2", "Diablo 4"],
      likesNumber: 0,
      viewsNumber: 83,
      commentsNumber: 83,
    },
  ],
});

export default postSlice.reducer;
