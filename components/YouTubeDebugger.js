const React = require('react');

class YouTubeDebugger extends React.Component {
  constructor(){
    super();

    this.setBitRate = this.setBitRate.bind(this);
    this.setResolution = this.setResolution.bind(this);

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  setBitRate(){
    this.setState({
      settings: Object.assign({},
        this.state.settings, {
          bitrate: 12,
        }
      )
    });
  }

  setResolution(){
    this.setState({
      settings: Object.assign({},
        this.state.settings, {
          video: {
              resolution: '720p',
            },
        }
      )
    });
  }

  render(){
    return(
      <div>
        <button className='bitrate' onClick={this.setBitRate}> Set Bitrate to 12 </button>
        <button className='resolution' onClick={this.setResolution}> Set Resolution to 720p </button>
      </div>
    );
  }
}

module.exports = YouTubeDebugger;