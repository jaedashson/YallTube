import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = (props) => {
  // debugger
  return (
    <div className="side-bar">
      <NavLink exact to="/" className="side-bar-link" activeClassName="side-bar-link-active">
        <FontAwesomeIcon className="side-bar-icon" icon="home" />
        <span className="side-bar-link-text">Home</span>
      </NavLink>
      <NavLink exact to="/subscriptions" className="side-bar-link" activeClassName="side-bar-link-active">
        <FontAwesomeIcon className="side-bar-icon" icon="newspaper" />
        <span className="side-bar-link-text">Subscriptions</span>
      </NavLink>
      <div className="side-bar-spacer"></div>
      <NavLink exact to="/history" className="side-bar-link" activeClassName="side-bar-link-active">
        <FontAwesomeIcon className="side-bar-icon" icon="history" />
        <span className="side-bar-link-text">History</span>
      </NavLink>
      <NavLink exact to="/your_videos" className="side-bar-link" activeClassName="side-bar-link-active" >
        <FontAwesomeIcon className="side-bar-icon" icon="film" />
        <span className="side-bar-link-text">Your videos</span>
      </NavLink>
      <NavLink exact to="/liked_videos" className="side-bar-link" activeClassName="side-bar-link-active">
        <FontAwesomeIcon className="side-bar-icon" icon="thumbs-up" />
        <span className="side-bar-link-text">Liked videos</span>
      </NavLink>
      <div className="side-bar-spacer"></div>
      <div className="side-bar-subscriptions" >
        <span className="side-bar-link-text">SUBSCRIPTIONS</span>
      </div>
    </div>
  )
}

export default SideBar