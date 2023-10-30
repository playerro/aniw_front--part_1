import { createSlice } from "@reduxjs/toolkit";

import FileAvatar_1 from "@@@/file-avatar_1.png";
import FileImage_1 from "@@@/file-image_1.png";

const filesSlice = createSlice({
  name: "files",
  initialState: [
    {
      id: "file_1",
      avatar: FileAvatar_1,
      author: "Lucas Pacheco",
      date: "2023, 08, 19",
      time: "10:30",
      isPremium: true,
      title: "A game is a form of play goals and structure",
      image: "",
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
      tools: "Blender",
      fileType: "exe",
      size: 112,
      categories: ["StarCraft 2", "Diablo 4"],
      likesNumber: 0,
      downloadsNumber: 83,
      commentsNumber: 83,
    },
    {
      id: "file_2",
      avatar: FileAvatar_1,
      author: "Lucas Pacheco",
      date: "2023, 08, 19",
      time: "10:30",
      isPremium: true,
      title: "A game is a form of play goals and structure",
      image: FileImage_1,
      text: "Games are sometimes played purely for enjoyment, sometimes for achievement or reward as well. They can be played alone, in teams, or online; by amateurs or by professionals. On the other hand, players in a game may constitute their own audience as they take their turn to play.",
      tools: "Blender",
      fileType: "exe",
      size: 112,
      categories: ["StarCraft 2", "Diablo 4"],
      likesNumber: 0,
      downloadsNumber: 83,
      commentsNumber: 83,
    },
  ],
});

export default filesSlice.reducer;
