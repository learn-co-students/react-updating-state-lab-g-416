// Code YouTubeDebugger Component Here

import React from 'react';

export default class YouTubeDebugger extends React.Component {

  constructor(props) {
    super(props);
    this.handleResolutionClick = this.handleResolutionClick.bind(this);
    this.handleBitrateClick = this.handleBitrateClick.bind(this);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleBitrateClick() {
    this.setState(
      {
        settings: Object.assign(this.state.settings, {bitrate: 12})
      }
    )
  }

  handleResolutionClick() {
    this.setState(
      {
        settings: Object.assign(this.state.settings, {video: {resolution: '720p'}})
      }
    )
  }

  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.handleBitrateClick} />
        <button className='resolution' onClick={this.handleResolutionClick} />
      </div>
    );
  }

}
