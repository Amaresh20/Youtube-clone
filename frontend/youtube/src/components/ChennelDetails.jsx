import React from "react";
import "./channelDetails.css";

function ChannelDetails() {
  const name_user = localStorage.getItem("fullName");
  const email_user = localStorage.getItem("email");
  return (
    <div className="channel-container">
      <div className="channel-header">
        <div className="profile-picture">
          {name_user.charAt(0).toUpperCase()}
        </div>
        <div className="user-details">
          <h2 className="user-name">
            {email_user.slice(0, 1).toUpperCase() + name_user.slice(1)}
          </h2>
          <h3 className="user-email">{email_user}</h3>
          <div className="button-group">
            <button className="channel-button">Customize Channel</button>
            <button className="channel-button">Manage Videos</button>
            <button className="channel-button">More Videos</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelDetails;
