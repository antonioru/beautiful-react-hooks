const React = require('react')
const { Card } = require('antd')

const DisplayDemo = window.DisplayDemo = (props) => (
  React.createElement(Card, { bordered: true, hoverable: true, ...props }, props.children)
)
