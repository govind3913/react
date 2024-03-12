import React, { useState } from 'react';

const TabsWithBrand: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('groups');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className='tabs-section'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container border-bottom">
          <a className="navbar-brand">AUTHORIZATION</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className={`nav-link ${activeTab === 'groups' ? 'active' : ''}`} onClick={() => handleTabChange('groups')}>Groups</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${activeTab === 'basicpermissions' ? 'active' : ''}`} onClick={() => handleTabChange('basicpermissions')}>Basic Permissions</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${activeTab === 'acesscontrols' ? 'active' : ''}`} onClick={() => handleTabChange('acesscontrols')}>Access Controls</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="tab-content">
        <div className={`tab-pane fade ${activeTab === 'groups' ? 'show active' : ''}`}>
          <h3>Groups Content</h3>
          <p>This is the groups page content.</p>
        </div>
        <div className={`tab-pane fade ${activeTab === 'basicpermissions' ? 'show active' : ''}`}>
          <h3>Basic Permissions Content</h3>
          <p>This is the basicpermissions page content.</p>
        </div>
        <div className={`tab-pane fade ${activeTab === 'acesscontrols' ? 'show active' : ''}`}>
          <h3>Acess Controls Content</h3>
          <p>This is the acesscontrols page content.</p>
        </div>
      </div>
    </div>
  );
};

export default TabsWithBrand;
