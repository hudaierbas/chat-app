import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios";
import { useAuth } from "./context/AuthContext";

function Chat({ messages }) {
  const [input, setInput] = useState([]);
  const { currentUser } = useAuth();
  const [lastMessage, setLastMessage] = useState("");

  const bottomRef = useRef();

  const scrollToBottom = (behavior) => {
    if (behavior === "smooth") {
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      bottomRef.current.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/api/v1/messages/new", {
      message: input,
      name: currentUser.email,
      timestamp: new Date(2019, 0, 23, 17, 23, 42).toLocaleString(),
      received: false,
    });

    setInput("");
    scrollToBottom("smooth");
  };

  useEffect(() => {
    scrollToBottom("auto");
    messages.map((l, i, arr) => {
      if (arr.length - 1 === i) {
        setLastMessage(l);
      }
    });
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Test Room</h3>
          <p>
            {lastMessage.message} {lastMessage.timestamp}
          </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${
              message.name === currentUser.email && "chat__reciever"
            }`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
        <div ref={bottomRef} className="chat__bodyBottom"></div>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
