export default (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [action.payload, ...state.expenses]
            }
        case 'REMOVE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expenseItem) => expenseItem.id !== action.payload
                )
            }
        case 'ADD_ACCOUNT':
            return {
                ...state,
                accounts: [action.payload, ...state.accounts]
            }
        case 'REMOVE_ACCOUNT':
            return {
                ...state,
                accounts: state.accounts.filter(
                    (accountItem) => accountItem.id !== action.payload
                )
            }
        default:
            return state
    }
}