const React = require('react');

const defaultStyle = {
  background: '#FDFEFD',
  width: '250px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 0 10px rgba(20, 20, 20, .1)',
  margin: '10px auto',
};

const DisplayDemo = window.DisplayDemo = ({ style, ...props }) => (
  React.createElement('div', { style: { ...defaultStyle, ...style } }, props.children)
);
