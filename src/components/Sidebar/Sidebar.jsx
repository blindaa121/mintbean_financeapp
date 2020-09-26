import React from 'react';
import './Sidebar.css' 

const Sidebar = () => {
    return (
      <div className="sidebar__container">
        <div className="sidebar__content">
          {/* <h1>this is the sidebar - Logo Here</h1> */}

          <div className="sidebar__links">
            <i class="fas fa-align-left"></i>
            <p>Dashboard</p>
          </div>

          <div className="sidebar__links">
            <i class="fas fa-wallet"></i>
            <p>Accounts</p>
          </div>

          <div className="sidebar__links">
            <i class="fas fa-chart-bar"></i>
            <p>Reports</p>
          </div>

          <div className="sidebar__links">
            <i class="fas fa-umbrella-beach"></i>
            <p>Categories</p>
          </div>

          {/* <p>Bonus</p> */}
        </div>
      </div>
    );
}

export default Sidebar
