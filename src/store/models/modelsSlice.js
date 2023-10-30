import { createSlice } from "@reduxjs/toolkit";

import ModelAvatar_1 from "@@@/model-avatar_1.png";
import ModelImage_1 from "@@@/model-image_1.png";

const modelsSlice = createSlice({
  name: "models",
  initialState: {
    categories: [
      "Owerwatch 2",
      "Diablo",
      "World of Warcraft",
      "StarCraft 2",
      "Hearthstone",
      "Hearthstone",
      "World of Warcraft",
      "Diablo 4",
      "Owerwatch 2",
    ],
    tags: ["Blender", "3Ds max", "Maya", "Cinema 4D", "FBX", "Obj"],
    models: [
      {
        id: "model_1",
        avatar: ModelAvatar_1,
        author: "Lucas Pacheco",
        title: "A game is a form of play goals and structure",
        image: ModelImage_1,
        isModelPremium: true,
        categories: ["StarCraft 2", "Diablo 4"],
        likesNumber: 0,
        downloadsNumber: 83,
        commentsNumber: 83,
      },
      {
        id: "model_2",
        avatar: ModelAvatar_1,
        author: "Lucas Pacheco",
        title: "A game is a form of play goals and structure",
        image: ModelImage_1,
        isModelPremium: true,
        categories: ["StarCraft 2", "Diablo 4"],
        likesNumber: 0,
        downloadsNumber: 83,
        commentsNumber: 83,
      },
      {
        id: "model_3",
        avatar: ModelAvatar_1,
        author: "Lucas Pacheco",
        title: "A game is a form of play goals and structure",
        image: ModelImage_1,
        isModelPremium: true,
        categories: ["StarCraft 2", "Diablo 4"],
        likesNumber: 0,
        downloadsNumber: 83,
        commentsNumber: 83,
      },
      {
        id: "model_4",
        avatar: ModelAvatar_1,
        author: "Lucas Pacheco",
        title: "A game is a form of play goals and structure",
        image: ModelImage_1,
        isModelPremium: true,
        categories: ["StarCraft 2", "Diablo 4"],
        likesNumber: 0,
        downloadsNumber: 83,
        commentsNumber: 83,
      },
    ],
  },
});

export default modelsSlice.reducer;
