// function Clock(props){
//   return <h1>{props.date.toLocaleString()}</h1>;
// }
import React from 'react';
class Clock extends React.Component{

  constructor(props){
    super(props);
    // this.state ne doit être affecté uniquement dans le construteur
    // pas ailleurs (on utilisera dans ce cas setState)
    this.state = { date : new Date()};
  }

  // Quand le render est monté, alors cette méthode se lance.
  componentDidMount(){
    this.timerId = setInterval(()=>{
      this.setState({date : new Date()})
    }, 1000);
  }

  // La méthode suivante est appelée quand un composant est retiré du DOM 
  componentWillUnmount(){
    clearInterval(this.timerId); //libère l'espace occupé par setInterval()
  }

  render(){
    return <h1>{this.state.date.toLocaleString()}</h1>;
  }
}

export default Clock;