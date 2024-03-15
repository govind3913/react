import React, { useState } from 'react';

interface CollapsibleProps {
  title: string;
  children?: React.ReactNode;
}

// Collapsible component
const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapsible">
      <div className="collapsible-header" onClick={toggleCollapse}>
        {title}
        <span className="collapsible-icons">
          {isCollapsed ? (
            <i className="bi bi-chevron-down"></i>
          ) : (
            <i className="bi bi-chevron-up"></i>
          )}
        </span>
      </div>
      {!isCollapsed && (
        <div className="collapsible-content">
          {children}
        </div>
      )}
    </div>
  );
};


export default Collapsible;