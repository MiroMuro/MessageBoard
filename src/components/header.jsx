import { useDispatch } from "react-redux";
import { handleChannelChange } from "../reducers/channelReducer";
import "../App.css";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="headerContainer">
      <button
        className="headerButton"
        value={1}
        onClick={(e) => dispatch(handleChannelChange(e.target.value))}
      >
        CHANNEL 1
      </button>
      <button
        className="headerButton"
        value={2}
        onClick={(e) => dispatch(handleChannelChange(e.target.value))}
      >
        CHANNEL 2
      </button>
      <button
        className="headerButton"
        value={3}
        onClick={(e) => dispatch(handleChannelChange(e.target.value))}
      >
        CHANNEL 3
      </button>
    </div>
  );
};

export default Header;
