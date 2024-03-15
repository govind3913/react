import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './TabsWithBrand';
import TabsWithBrand from './TabsWithBrand';
import Collapsible from './collapse';
import Sidebar from './Sidebar';
import SidebarItem from './Sidebar';
import ProductTable from './ProductTable';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetailsPage from './ProductDetailsPage';

function App() {
  const sidebarData = [
    {
      id: 1,
      title: "Projects",
      children: [
        { id: 11, title: "Project 1" },
        { id: 12, title: "Project 2" }
      ]
    },
    {
      id: 2,
      title: "Entities",
      children: [
        { id: 21, title: "Entity 1" },
        { id: 22, title: "Entity 2" }
      ]
    },
    {
      id: 3,
      title: "Utilities",
      children: [
        { id: 31, title: "Utility 1" },
        { id: 32, title: "Utility 2" }
      ]
    },
    {
      id: 4,
      title: "Non-collapsible Item 1"
    },
    {
      id: 5,
      title: "Non-collapsible Item 2"
    }
  ];

  const renderSidebarItems = () => {
    return sidebarData.map(item => (
      <SidebarItem key={item.id} {...item} />
    ));
  };

  return (
    <div className="App" style={{padding: "1.5rem"}}>
      {/* <div className='row'>
        <div className='col-md-3'>
        <div className="card rounded-0 border-0">
    <i className="bi bi-person rounded-circle card-img-top mt-3 mx-auto img-thumbnail"></i>
    <div className="card-body">
      <h6 className="card-title text-center">GOVINDA PANTANGI</h6>
      <p className="card-text text-center">D636384</p>
    </div>
    <ul className="list-group list-group-flush mt-5">
    <li className="list-group-item"><i></i><span>Superuser</span></li>
    <li className="list-group-item"><i></i><span>Admin Panel Access</span></li>
    <li className="list-group-item"><i></i><span>Click to see API token</span></li>
    <li className="list-group-item"><i></i><span>Joined</span></li>
    <li className="list-group-item"><i></i><span>Last Login</span></li>
  </ul>
  </div>
        </div>
      <div className='col-md-9'>
          <div className="side-menu">
      <Collapsible title="Projects">
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
      </Collapsible>
      <Collapsible title="Entities">
        <ul>
          <li>Entity 1</li>
          <li>Entity 2</li>
        </ul>
      </Collapsible>
      <Collapsible title="Utilities">
        <ul>
          <li>Utility 1</li>
          <li>Utility 2</li>
        </ul>
      </Collapsible>
    </div>
    </div>
      </div> */}
 {/* <div className="sidebar">
        {renderSidebarItems()}
      </div>  */}
      {/* <ProductTable /> */}
      
      <Router>
        <Routes>
          <Route path="/" element={<ProductTable />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
         </div>
  );
}

export default App;
