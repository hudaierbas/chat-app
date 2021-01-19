<<<<<<< HEAD
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
=======
import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Test Room</h2>
        <p>last message of the room</p>
      </div>
    </div>
  );
}

export default SidebarChat;
>>>>>>> 3bce3e3203184b14dec8c97e5563c472cac2d810
