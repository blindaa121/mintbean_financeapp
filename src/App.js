import React, { useState, useContext } from 'react';
import { GlobalContextProvider } from './components/context/GlobalState'
import './App.css';
import DashBoardHeader from './components/DashboardHeader/DashboardHeader';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';

function App() {

  return (
    <GlobalContextProvider>
      <div className="app__container">
        <Sidebar />
      <div className='sidebar__dashboard'>
        <Dashboard />
      </div>
    </div>
    </GlobalContextProvider>
    
  );
}

export default App;
