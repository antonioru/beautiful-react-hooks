import React from 'react';
import { Sidebar } from 'beautiful-react-ui';

const SidebarItem = (props) => {
  const { visibleName, selected, href } = props;

  return (
    <>
      {visibleName === 'Hooks' && <Sidebar.Divider />}
      <Sidebar.Item text={visibleName} current={selected} to={href} />
      {visibleName === 'Customise' && <Sidebar.Divider />}
    </>
  );
};

const SidebarCollapsible = (props) => {
  const { visibleName, selected, components, href } = props;

  return (
    <Sidebar.Collapsible text={visibleName} current={selected}>
      {components.map((compProps) => (
        <SidebarItem
          {...compProps}
          href={`${href}/${compProps.name}`}
          selected={`${href}/${compProps.name}` === `/${window.location.hash}`}
          key={compProps.name}
        />
      ))}
    </Sidebar.Collapsible>
  );
};

const SidebarItemRenderer = (props) => {
  const { sections, components, href } = props;
  const isLeaf = sections.length === 0 && components.length === 0;
  const Component = isLeaf ? SidebarItem : SidebarCollapsible;

  return (
    <Component {...props} key={href} />
  );
};


const CustomComponentListRenderer = ({ items }) => items.map(SidebarItemRenderer);

export default CustomComponentListRenderer;
