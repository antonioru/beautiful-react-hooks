import React from 'react';
import { Sidebar } from 'beautiful-react-ui';
import CustomLogo from './CustomLogo';

const CustomSidebar = ({ children }) => (
  <Sidebar isOpen showToggle={false} headerLogo={<CustomLogo/>}>
    {children}
  </Sidebar>
);

export default CustomSidebar;
