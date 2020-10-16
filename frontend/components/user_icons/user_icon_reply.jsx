import React from "react";
import { Link } from "react-router-dom";

const UserIconReply = props => (
  <div className="user-icon-reply">
    {props.authorUsername[0]}
  </div>
)

export default UserIconReply;