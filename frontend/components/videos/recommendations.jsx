import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RecommendationItem from "./recommendation_item";

import { shuffleVideos } from "../../util/videos_info_util";

class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: null,
      loaded: false
    }
  };

  componentDidMount() {
    this.props.fetchAllVideos()
      .then(action => {
        const uploaderIds = action.videos.map(video => video.uploader_id);
        return this.props.fetchUsers(uploaderIds);
      })
      .then(action => {
        this.generateRecommendations();
        this.setState({ loaded: true });
      });
  }

  generateRecommendations() {
    const videos = this.props.videos.filter(video => video.id !== this.props.videoId);
    const recommendations = shuffleVideos(videos).slice(0, 10);
    this.setState({ recommendations });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.videoId !== this.props.videoId) {
      this.generateRecommendations();
    }
  }

  renderItems() {
    const items = this.state.recommendations.map(video => {
      return (
        <RecommendationItem
          key={video.id}
          video={video}
          uploader={this.props.uploaders[video.uploader_id]}
        />
      );
    });

    return items;
  };

  render() {
    if (!this.state.loaded) return null;

    return (
      <div className="recommendations">
        {this.renderItems()}
      </div>
    );
  }
}

export default Recommendations;