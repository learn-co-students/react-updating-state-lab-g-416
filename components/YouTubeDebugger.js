const React = require('react');

class YouTubeDebugger extends React.Component {
  constructor () {
    super ();

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

    this.debugBitrate = this.debugBitrate.bind(this)
    this.debugResolution = this.debugResolution.bind(this)
  }

  debugBitrate () {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  debugResolution () {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    })
  }

  render () {
    return (
      <div>
        <button className='bitrate' onClick={ this.debugBitrate }>Change Bitrate</button>
        <button className='resolution' onClick={ this.debugResolution }>Change Resolution</button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger;