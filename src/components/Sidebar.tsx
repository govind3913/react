import React from 'react';
import Collapsible from './collapse';

interface SidebarItemProps {
  id: number;
  title: string;
  children?: SidebarItemProps[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({ id, title, children }) => {
  const hasChildren = children && children.length > 0;

  const renderSubitems = () => {
    if (children) {
      return children.map(child => (
        <SidebarItem key={child.id} {...child} />
      ));
    }
    return null;
  };

  return (
    <div className="sidebar-item">
      {hasChildren ? (
        <Collapsible title={title}>
          {renderSubitems()}
        </Collapsible>
      ) : (
        <div className="sidebar-non-collapsible">
          {title}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
