import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

function SidebarChat({ messages }) {
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    messages.map((l, i, arr) => {
      if (arr.length - 1 === i) {
        setLastMessage(l);
      }
    });
  }, [messages]);

  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Test Room</h2>
        <p>
          {lastMessage.message} {lastMessage.timestamp}
        </p>
      </div>
    </div>
  );
}

export default SidebarChat;
