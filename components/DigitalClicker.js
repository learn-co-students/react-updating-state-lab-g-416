const React = require('react');
const ReactDOM = require('react-dom');

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }

    this.updateClicked = this.updateClicked.bind(this);
    this.resetClicked = this.resetClicked.bind(this);
  }

  updateClicked() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  resetClicked() {
    this.setState({
      timesClicked: 0
    });
  }

  render() {
    return (
      <div>
        <h3>Digital Clicker</h3>
        <h4>Times Clicked: {this.state.timesClicked}</h4>
        <button onClick={this.updateClicked}>{this.state.timesClicked === 0 ? 'Clicky Button' : this.state.timesClicked}</button>
        
      </div>
    );
  }
}

module.exports = DigitalClicker;