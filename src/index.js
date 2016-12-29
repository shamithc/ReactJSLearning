import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


function formatName(user){
  return user.first_name + ' ' + user.last_name;
}

const user = {
  first_name: 'Shamith',
  last_name: 'C'
}

const element = (
  <div>
    <h1>Hello, {formatName(user)}!</h1>
    <h2> How are you man ? </h2>
  </div>
);

const element_h1 = React.createElement('h1', {className: 'greetings'}, "Hello World!")

ReactDOM.render(
  element_h1,
  document.getElementById('root')
);
