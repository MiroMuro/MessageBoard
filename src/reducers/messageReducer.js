import { createSlice } from "@reduxjs/toolkit";
import ChannelService from "../services/service";

const messageSlice = createSlice({
  name: "message",
  initialState: [],
  reducers: {
    addMessage(state, action) {
      console.log(action.payload);
      const channelToFind = state.find(
        (channel) => channel.id == action.payload.id
      );
      const modifiedChannel = {
        ...channelToFind,
        messages: channelToFind.messages.concat(action.payload.content),
      };
      return state.map((channel) =>
        channel.id !== modifiedChannel.id ? channel : modifiedChannel
      );
    },
    addChannelsAndMessages(state, action) {
      return action.payload;
    },
  },
});
export const { addMessage, addChannelsAndMessages } = messageSlice.actions;

export const getAllChannelsMessages = () => {
  return async (dispatch) => {
    const channels = await ChannelService.getAllChannels();
    dispatch(addChannelsAndMessages(channels));
  };
};

export const postMessage = (channelId, message) => {
  return async (dispatch) => {
    dispatch(addMessage({ id: channelId, content: message }));
    await ChannelService.postMessage(channelId, message);
  };
};
export default messageSlice.reducer;
