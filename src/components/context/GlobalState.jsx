import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    expenses: [],
    category: [],
    accounts: []
}

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    console.log(state);
    const addExpense = expenseItem => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expenseItem
        })
    }

    const editExpense = id => {
        dispatch({
            type: 'EDIT_EXPENSE',
            payload: id
        })
    }

    const removeExpense = id => {
        dispatch({
            type: 'REMOVE_EXPENSE',
            payload: id
        })
    }

    const addAccount = accountItem => {
        dispatch({
            type: 'ADD_ACCOUNT',
            payload: accountItem
        })
    }

    const removeAccount = id => {
        dispatch({
            type: 'REMOVE_ACCOUNT',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            expenses: state.expenses,
            accounts: state.accounts,
            addExpense,
            editExpense,
            removeExpense,
            addAccount,
            removeAccount
        }}>
        {children}
        </GlobalContext.Provider>
    )
}
