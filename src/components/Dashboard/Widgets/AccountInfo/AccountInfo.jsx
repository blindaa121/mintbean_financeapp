import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState'
import '../../Dashboard.css';
import './AccountInfo.css';
import { uuid } from "uuidv4";
import { BlockPicker } from 'react-color';
import AccountItem from './AccountItem' 

const AccountInfo = () => {
    const [accountInput, setAccountInput] = useState('');
    const [accountType, setAccountType] = useState('');
    const [color, setColor] = useState({color: "#FFF"})
    // const [account, setAccount] = useState([]);

    const {addAccount, removeAccount, accounts} = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newAccount = {
            id: uuid(),
            name: accountInput,
            type: accountType
        }

        addAccount(newAccount);
        setAccountInput('')
    }

    const handleType = (e) => {
        setAccountType(e.target.value)
    }

    const handleColor  = (color) => {
        setColor({color: color.hex})
    }

    // console.log(color);

    const accountItems = Object.values(accounts);
    return (
        <div className='accountinfo__container dashboard__widget'>
            <div className="accountinfo__header">
                <span>ACCOUNTS</span>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Add an Account:
                    <input 
                        type="text"
                        name='account'
                        onChange={(e) => setAccountInput(e.target.value)}
                        value={accountInput}/>
                </label>
                <label htmlFor="">
                    Type:
                    <select value={accountType}  onChange={handleType}  name="accounttype" id="">
                        <option value="cash">Cash</option>
                        <option value="debit">Debit</option>
                        <option value="credit">Credit</option>
                    </select>
                </label>
            </form>
            {/* <BlockPicker onChange={handleColor} value={color}/> */}
            <div className="accountinfo__list">
                <ul>
                    {accountItems.map(account => (
                       <AccountItem account={account} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AccountInfo;
