import Header from "./components/header";
import EditorPanel from "./components/editorPanel";
import MessagePanel from "./components/messagePanel";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllChannelsMessages } from "./reducers/messageReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllChannelsMessages());
  }, []);
  return (
    <div>
      <Header />
      <EditorPanel />
      <MessagePanel />
    </div>
  );
};

export default App;
