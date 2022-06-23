import React from 'react'
import { MemoryRouter } from 'react-router-dom'

const ReactRouterWrapper = ({ children }) => (
  <MemoryRouter>
    {children}
  </MemoryRouter>)

export default ReactRouterWrapper
