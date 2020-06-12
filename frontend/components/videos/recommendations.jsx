import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RecIndexItem from "./rec_index_item";
import { shuffleVideos } from "../../util/videos_info_util";

class Recommendations extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = { recommendations: null }
  };

  componentDidMount() {
    debugger
    this.props.fetchAllVideos().then(action => {
      let recommendations = shuffleVideos(action.videos).slice(0,10);

      let filtered = [];
      
      for (let i = 0; i < recommendations.length; i++) {
        if (recommendations[i].id !== this.props.videoId) {
          filtered.push(recommendations[i]);
        }
      }

      this.setState({ recommendations: filtered});
    })
  };

  renderItems() {
    debugger
    if (!this.state.recommendations) {
      debugger
      return null;
    }
    debugger
    const items = this.state.recommendations.map(video => {
      return (
        <RecIndexItem
          key={video.id}
          video={video}
          fetchUser={this.props.fetchUser}
        />
      );
    });

    return items;
  };

  render() {
    debugger
    return (
      <div className="recommendations">
        {this.renderItems()}
      </div>
    );
  }
}

export default Recommendations;