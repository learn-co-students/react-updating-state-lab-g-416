const React = require('react');

class DigitalClicker extends React.Component{
	
	constructor(){
		super();
		this.state = {
			timesClicked: 0
		}
		this.clickEvent = this.clickEvent.bind(this);
	}

	clickEvent(event){
		this.setState({
			timesClicked: ++this.state.timesClicked
		});
	}

	render(){
		return(
			<button onClick = {this.clickEvent}>{this.state.timesClicked}</button>
		);
	}	
}

module.exports = DigitalClicker;
