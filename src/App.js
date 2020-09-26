import React from 'react';
import './App.css';
import DashBoardHeader from './components/DashboardHeader/DashboardHeader';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app__container">
        <Sidebar />
      <div className='sidebar__dashboard'>
        <DashBoardHeader />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
