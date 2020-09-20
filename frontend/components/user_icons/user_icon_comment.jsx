import React from "react";
import { Link } from "react-router-dom";

// TODO - Once user pages have been created, make this render a Link
const UserIconComment = props => (
  <div className="user-icon-comment">
    {props.authorUsername[0]}
  </div>
)

export default UserIconComment;