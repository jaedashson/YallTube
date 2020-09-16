import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RecIndexItem from "./rec_index_item"; // TODO - Phase this out
import RecommendationItem from "./recommendation_item"; // TODO - Phase this in

import { shuffleVideos } from "../../util/videos_info_util";

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recommendations: null }
  };

  generateRecs() {
    this.props.fetchAllVideos().then(action => {
      let recommendations = shuffleVideos(action.videos).slice(0, 10);

      let filtered = [];

      for (let i = 0; i < recommendations.length; i++) {
        if (recommendations[i].id !== this.props.videoId) {
          filtered.push(recommendations[i]);
        }
      }

      this.setState({ recommendations: filtered });
    })
  }

  // TODO - Figure out the role of this method
  componentDidUpdate(prevProps) {
    if (prevProps.videoId !== this.props.videoId) {
      this.generateRecs();
    }
  }

  componentDidMount() {
    this.generateRecs();
  };

  renderItems() {
    if (!this.state.recommendations) {
      return null;
    }
    const items = this.state.recommendations.map(video => {
      return (
        // TODO***** change RecIndexItem to RecommendationItem
        <RecommendationItem
          key={video.id}
          video={video}
          fetchUser={this.props.fetchUser}
        />
      );
    });

    return items;
  };

  render() {
    return (
      <div className="recommendations">
        {this.renderItems()}
      </div>
    );
  }
}

export default Recommendations;