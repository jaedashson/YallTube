import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.props.fetchUsers(this.props.subscribedChannelIds)
      .then(action => this.setState({ loaded: true }));
  }

  renderSubscriptions() {
    const subscriptions = this.props.subscribedChannelIds.map(channelId => {
      const channel = this.props.users[channelId];

      return (
        <Link to={`/users/${channelId}`} className="side-bar-subscription-link">
          {channel.username}
        </Link>
      );
    });

    return subscriptions;
  }

  render() {
    if (!this.state.loaded) return null;

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
        <p className="side-bar-link-text">SUBSCRIPTIONS</p>
        {this.renderSubscriptions()}
      </div>
    );
  }
}

export default SideBar;