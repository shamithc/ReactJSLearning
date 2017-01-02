import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date}
  }

  componentDidMount() {
    this.timmerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timmerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
        <div>
          <h1>Hello {this.props.name} </h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
  }
}

function tick(){
  
  const element = (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Lola" />
      <Welcome name="Rara" />
    </div>);
  
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

// setInterval(tick, 1000);


ReactDOM.render(
    <Welcome name="Sara" />,
    document.getElementById('root')
  );
