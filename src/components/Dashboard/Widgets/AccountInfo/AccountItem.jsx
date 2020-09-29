import React, { useContext, useEffect }from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import './AccountInfo.css'

const AccountItem = ({account}) => {
    const { removeAccount } = useContext(GlobalContext);


    const handleRemove = () => {
        removeAccount(account.id);
    }

    return (
      <div className="accountitem__container">
        <div className="accountitem__row">
            <li>{account.name}</li>
          <i class="fas fa-trash-alt" onClick={handleRemove}></i>
        </div>
      </div>
    );
}

export default AccountItem
