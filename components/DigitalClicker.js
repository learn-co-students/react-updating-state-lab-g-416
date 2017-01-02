const React= require('react');


class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
    timesClicked: 0,
  };

    // Define the initial state:

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
    timesClicked: ++this.state.timesClicked,

      // addressInfo: Object.assign({}, this.state.addressInfo, {
      // city: 'New York City',
      // }),
  });
  }

  render() {
    console.log(this.state.timesClicked);
    return (
      <div>
        <p>This Timer is at {this.state.timesClicked}!</p>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

module.exports= DigitalClicker
