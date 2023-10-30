import { createSlice } from "@reduxjs/toolkit";

import UserAvatar_1 from "@@@/usersPage/user_1.png";
import UserAvatar_2 from "@@@/usersPage/user_2.png";
import UserAvatar_3 from "@@@/usersPage/user_3.png";
import UserAvatar_4 from "@@@/usersPage/user_4.png";
import UserAvatar_5 from "@@@/usersPage/user_5.png";
import UserAvatar_6 from "@@@/usersPage/user_6.png";

const usersSlice = createSlice({
  name: "files",
  initialState: [
    {
      id: "user_1",
      avatar: UserAvatar_1,
      isAdmin: false,
      nickName: "Marama",
      fullName: "Jaquon Hart",
      createdAt: "2023, 08, 19",
      country: "Georgia",
    },
    {
      id: "user_2",
      avatar: UserAvatar_2,
      isAdmin: false,
      nickName: "Ekene",
      fullName: "Karlien Nijhuis",
      createdAt: "2023, 08, 19",
      country: "Germany",
    },
    {
      id: "user_3",
      avatar: UserAvatar_3,
      isAdmin: false,
      nickName: "Karl",
      fullName: "Homura Yunosuke",
      createdAt: "2023, 08, 19",
      country: "United Kingdom",
    },
    {
      id: "user_4",
      avatar: UserAvatar_4,
      isAdmin: true,
      nickName: "Nghiêm",
      fullName: "Christopher Walker",
      createdAt: "2023, 08, 19",
      country: "China",
    },
    {
      id: "user_5",
      avatar: UserAvatar_5,
      isAdmin: false,
      nickName: "Fabiana",
      fullName: "Lucas Pacheco",
      createdAt: "2023, 08, 19",
      country: "United Kingdom",
    },
    {
      id: "user_6",
      avatar: UserAvatar_6,
      isAdmin: false,
      nickName: "Jaroslav",
      fullName: "Morganne Flaherty",
      createdAt: "2023, 08, 19",
      country: "Japan",
    },
  ],
});

export default usersSlice.reducer;
