import React from "react";
import PropTypes from "prop-types";
import "./MessageHistory.css"

export const MessageHistory = ({ msg }) => {
  if (!msg) return null;
  return msg.map((item, index) => (
    <div key={index} className="message-history mt-3">
      <div className="send font-weight-blod text-secondary">
        <div className="sender">{item.messageBy}</div>
        <div className="date">{item.date}</div>
      </div>
      <div className="message">
        <div className="text">{item.message}</div>
      </div>
    </div>
  ));
};

MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};
