import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'

import DashboardIcon from '@material-ui/icons/Dashboard';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { setScene } from '../redux/actions/scene-action';
import { scenes } from '../constants/scenes';
import { useDispatch } from 'react-redux';

export default function MainList() {

    const dispatch = useDispatch()

    const openDashboard = () => {
        dispatch(setScene(scenes.DASHBOARD))
    }

    const openAddExpense = () => {
        dispatch(setScene(scenes.ADD_EXPENSE))
    }

    const listExpences = () => {
        dispatch(setScene(scenes.ALL_EXPENSE))
    }

    return (
        <div>
            <ListItem button onClick={openDashboard}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>
            <ListItem button onClick={openAddExpense}>
                <ListItemIcon>
                    <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Add Expense" />
            </ListItem>
            <ListItem button onClick={listExpences}>
                <ListItemIcon>
                    <MonetizationOnIcon />
                </ListItemIcon>
                <ListItemText primary="All Expenses" />
            </ListItem>
        </div>
    )
}
