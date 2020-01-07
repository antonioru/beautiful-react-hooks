const React = require('react');

const style = {
  background: '#FDFEFD',
  width: '250px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 0 10px rgba(20, 20, 20, .1)',
  margin: '10px auto',
};

const DisplayDemo = window.DisplayDemo = (props) => React.createElement('div', { style }, props.children);
