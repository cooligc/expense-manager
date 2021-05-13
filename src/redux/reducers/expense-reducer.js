const INIT_STATE = {
    'value': [],
    'isLoading': false
}

export default function expenseReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case 'addExpense':
            return {
                ...state,
                value: [...state.value, action.payload]
            }
        default : 
            return state
    }
}

// export default expenseReducer;