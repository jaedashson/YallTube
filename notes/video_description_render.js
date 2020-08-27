      <div className="video-description">
        <div className="video-description-header">
          <p className="video-title">{this.props.video.title}</p>

          <div className="video-info">
            <div className="video-views-date-container">
              <p className="video-views">9,999,999 views</p>
              <p className="video-views-date-divider">•</p>
              <p className="video-date">{this.state.uploadDate}</p>
            </div>
            <div className="video-likes-container">
              <FontAwesomeIcon icon="thumbs-up" className={"video-likes-item thumb " + (this.state.liked ? "voted" : "")} onClick={this.handleClickLike} />
              <p className="video-likes-item video-vote-count">LIKE {this.state.likeCount}</p>
              <FontAwesomeIcon icon="thumbs-down" className={"video-likes-item thumb " + (this.state.disliked ? "voted" : "")} onClick={this.handleClickDislike} />
              <p className="video-likes-item video-vote-count">DISLIKE {this.state.dislikeCount}</p>
            </div>
          </div>
        </div>

        <div className="video-description-body-container">
          <div className="video-description-body-left">
            <div className="current-user-dropdown-icon">{this.props.uploader.username[0]}</div>
            <div className="video-description-body">
              <p className="uploader-username">{this.props.uploader.username}</p>
              <p className="uploader-subscriber-count">30.4 M subscribers</p>
              <p className="video-description-text">{this.props.video.description}</p>
            </div>
          </div>
          <div className="uploader-subscribe-button-container">
            <button onClick={this.handleSubscribe} className="uploader-subscribe-button">SUBSCRIBE</button>
          </div>
        </div>
      </div>