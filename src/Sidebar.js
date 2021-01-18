import React, { useState } from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import { useAuth } from "./context/AuthContext";
import { useHistory } from "react-router-dom";

function Sidebar() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed tıo log out");
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div style={{ display: "flex" }}>
          <Avatar />
          <div
            style={{
              display: "flex",
              "flex-direction": "column",
              "margin-left": "10px",
            }}
          >
            Welcome {currentUser && currentUser.email} {error && { error }}
            <button
              variant="link"
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              Log Out
            </button>
          </div>
        </div>

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
