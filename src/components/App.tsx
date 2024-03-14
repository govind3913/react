import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './TabsWithBrand';
import TabsWithBrand from './TabsWithBrand';

function App() {
  return (
    <div className="App" style={{padding: "1.5rem"}}>
      <div className='row'>
        <div className='col-md-3'>
        <div className="card rounded-0 border-0">
    <i className="bi bi-person rounded-circle card-img-top mt-3 mx-auto img-thumbnail"></i>
    <div className="card-body">
      <h6 className="card-title text-center">Products</h6>
      <p className="card-text text-center">productId</p>
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
          <TabsWithBrand />
    </div>
      </div>
     
    </div>
  );
}

export default App;
