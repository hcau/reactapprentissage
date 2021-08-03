import React from 'react';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (message, event) => {
    //alert('link clicked');
    console.log(event);
    console.log(message);
    this.setState((state) => {
      console.log(' state.isToggleOn = ' + state.isToggleOn);
      //this.setState({ isToggleOn: this.state.isToggleOn ? false : true });
      return { isToggleOn: state.isToggleOn ? false : true };
    });
  };
  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick('some value', e)}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default ToggleButton;
