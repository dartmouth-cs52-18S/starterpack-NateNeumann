import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
// import $ from 'jquery';

const App = () => {
  return <div className="test">All the React are belong to us!</div>;
};

ReactDOM.render(<App />, document.getElementById('main'));
