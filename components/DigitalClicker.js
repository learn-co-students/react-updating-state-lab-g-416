const React = require('react');

class DigitalClicker extends React.Component {
  constructor () {
    super ();

    this.state = {
      timesClicked: 0
    }

    this.handleClicker = this.handleClicker.bind(this)
  }

  handleClicker () {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }

  render () {
    return (
      <div>
        <button onClick={ this.handleClicker }>{ this.state.timesClicked }</button>
      </div>
    )
  }
}

module.exports = DigitalClicker;