import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const ReactRouterWrapper = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>)

export default ReactRouterWrapper
