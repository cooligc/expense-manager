import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core'
import React from 'react'

export default function AddExpense() {

    const addExpense = () => {

    }

    return (
        <div>
            <form >
                <FormControl>
                    <InputLabel htmlFor="my-input">Expense Name</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="expenseName">Expense Name</FormHelperText>
                </FormControl>
                <br />

                <FormControl>
                    <InputLabel htmlFor="my-input">Expense Amount</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="expenseAmount">Expense Amount</FormHelperText>
                </FormControl>

                <Button onClick={addExpense} />

            </form>

        </div>
    )
}
