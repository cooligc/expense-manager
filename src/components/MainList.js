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

    const handleClick = () => {
        dispatch(setScene(scenes.ADD_EXPENSE))
    }

    return (
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Add Expense" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <MonetizationOnIcon />
                </ListItemIcon>
                <ListItemText primary="All Expenses" />
            </ListItem>
        </div>
    )
}
