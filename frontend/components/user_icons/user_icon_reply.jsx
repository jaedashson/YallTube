import React from "react";
import { Link } from "react-router-dom";

// TODO - Once user pages have been created, make this render a Link
const UserIconReply = (props) => (
  <div className="user-icon-reply">
    {props.authorUsername[0]}
  </div>
)

export default UserIconReply;