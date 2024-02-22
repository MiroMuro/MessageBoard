import { useState } from "react";
import { postMessage } from "../reducers/messageReducer.js";
import { useDispatch, useSelector } from "react-redux";
import store from "../store.js";
const EditorPanel = () => {
  const dispatch = useDispatch();

  const getId = () => (100000 * Math.random()).toFixed(0);

  const [message, setMessage] = useState("");

  store.subscribe(() => setMessage(""));

  const selectedChannel = useSelector((state) => state.channel);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const submitMessage = (event) => {
    event.preventDefault();
    const messageToPost = {
      id: getId(),
      content: event.target.textInput.value,
    };
    dispatch(postMessage(selectedChannel, messageToPost));
  };

  if (selectedChannel === " ") {
    return <div></div>;
  }

  return (
    <div className="editorPanel">
      <form onSubmit={submitMessage}>
        <div className="editorPanelText">Write a message: </div>
        <input
          className="messageInput"
          name="textInput"
          value={message}
          onChange={(event) => handleInputChange(event)}
        />
        <button
          className="submitButton"
          disabled={message.length === 0}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default EditorPanel;
