const React = require('react');

class YouTubeDebugger extends React.Component{
	constructor(){
		super();
		
		this.state = {
			errors: [],
			user: null,
			settings:{
				bitrate: 8,
				video:{
					resolution: '1080p'
				}
			}
		};

		this.resolutionClickEvent = this.resolutionClickEvent.bind(this);
		this.bitrateClickEvent = this.bitrateClickEvent.bind(this);
	}
	
	resolutionClickEvent(){
		this.setState({
			settings: Object.assign({}, this.state.settings,{
				video: Object.assign({}, this.state.settings.video,{
					resolution: '720p'
				})
			})
		});
	}

	bitrateClickEvent(){
		this.setState({
			settings: Object.assign({}, this.state.settings, {
				bitrate: 12 
			})	
		});
	}

	render(){
		return(
			<div>
				<button className = "resolution" onClick = {this.resolutionClickEvent}>Resolution Change</button>
				<button className = "bitrate" onClick = {this.bitrateClickEvent}>Bitrate Change</button>
			</div>
		);
	}
}

module.exports = YouTubeDebugger;
