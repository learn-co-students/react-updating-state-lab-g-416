const React = require('react')

class DigitalClicker extends React.Component {
  constructor(){
    super()

    this.state = {
      timesClicked: 0
    }
    this.increment = this.increment.bind(this)
  }
  increment() {
     this.state.timesClicked ++
  }
  render(){


    return(
      <button onClick={this.increment}>{this.state.timesClicked}</button>
    )
  }


}

module.exports = DigitalClicker
