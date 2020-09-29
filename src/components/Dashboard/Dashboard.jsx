import React from 'react';
import AccountInfo from './Widgets/AccountInfo/AccountInfo';
import Category from './Widgets/Category/Category';
import Expenses from './Widgets/Expenses/Expenses';
import Reports from './Widgets/Reports/Reports';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='dashboard__container'>
            <h1>It's easy as 1, 2, 3..</h1>
            <div className="dashboard__widgets__container">
                <AccountInfo />
                <Category />
                <Expenses />
            </div>
            <Reports />
            <Reports />
            <Reports />
            <Reports />
            <Reports />
            
        </div>
    )
}

export default Dashboard
