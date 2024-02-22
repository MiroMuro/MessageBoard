import axios from "axios";
const baseUrl = "http://localhost:3001";
const getAllChannels = async () => {
  const channels = await axios.get(`/channels`);
  return channels.data;
};

const getChannelsMessages = async (channelId) => {
  console.log(channelId);
  const message = await axios.get(`/messages/${channelId}`);
  return message.data;
};

const postMessage = async (channelId, message) => {
  const postedMessage = await axios.post(`/${channelId}`, message);
  return postedMessage.data;
};

export default { getAllChannels, getChannelsMessages, postMessage };
