import React from "react";
import { Link } from "react-router-dom";

const UserIconComment = props => (
  <div className="user-icon-comment">
    {props.authorUsername[0]}
  </div>
)

export default UserIconComment;