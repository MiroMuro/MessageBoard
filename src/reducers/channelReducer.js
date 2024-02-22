import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
  name: "channel",
  initialState: " ",
  reducers: {
    handleChannelChange(state, action) {
      console.log(action.type);
      return action.payload;
    },
  },
});
export const { handleChannelChange } = channelSlice.actions;
export default channelSlice.reducer;
