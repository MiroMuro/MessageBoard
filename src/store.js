import { configureStore } from "@reduxjs/toolkit";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import channelReducer from "./reducers/channelReducer";
import messageReducer from "./reducers/messageReducer";

const config = {
  blacklist: ["channel/handleChannelChange"],
};

const store = configureStore({
  reducer: {
    channel: channelReducer,
    messages: messageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createStateSyncMiddleware(config)),
});

initMessageListener(store);
export default store;
