import { configureStore } from "@reduxjs/toolkit";

import postsSlice from "./posts/postsSlice";
import postsCommentsSlice from "./postsComments/postsCommentsSlice";
import filesSlice from "./files/filesSlice";
import modelsSlice from "./models/modelsSlice";
import usersSlice from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    postsComments: postsCommentsSlice,
    files: filesSlice,
    models: modelsSlice,
    users: usersSlice,
  },
});
