import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllChannelsMessages } from "../reducers/MessageReducer";
const MessagePanel = () => {
  const dispatch = useDispatch();

  const channelData = useSelector(({ channel, messages }) => {
    if (channel === null) return "loading";
    else {
      return messages.find((messageChannel) => messageChannel.id == channel);
    }
  });

  useEffect(() => {
    dispatch(getAllChannelsMessages());
  }, []);

  const chacha = useSelector((state) => state.channel);

  if (channelData === undefined)
    return (
      <div className="channelNotSelectedDiv">
        Welcome to the messageboard! Pick a channel to start
      </div>
    );
  else
    return (
      <div className="messagePanelContainer">
        <div className="channelNameDiv">
          <h2>Channel {chacha}</h2>
        </div>
        <div className="messageListContainer">
          <ul>
            {channelData.messages.map((message) => (
              <li className="message" key={message.id}>
                {message.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default MessagePanel;
