import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWUyMmEzMzctNWUzZi00NWI5LThmZWMtNWNkYjllNTU3ODQ1XkEyXkFqcGdeQXVyMjMyODkxODA@._V1_.jpg",
      message: "whats up",
    },
    {
      name: "Bob",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWUyMmEzMzctNWUzZi00NWI5LThmZWMtNWNkYjllNTU3ODQ1XkEyXkFqcGdeQXVyMjMyODkxODA@._V1_.jpg",
      message: "How's it going",
    },
    {
      message: "How's it going my man?",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    // prettier-ignore
    setInput('');
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">You matched with Ellen on 10/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />

            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}
export default ChatScreen;
