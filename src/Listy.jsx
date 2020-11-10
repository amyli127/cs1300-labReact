import React, { Component } from 'react'
import { List, ListItemText, ListItem } from '@material-ui/core'

class Listy extends Component {
    createList = (num) => {
        return (
            <ListItem>
                <ListItemText primary={num} />
            </ListItem>
        )
    }

    render() {
        const listItems = (this.props.nums).map(this.createList);
        return (
            <List>{listItems}</List>
        )
    }
}

export default Listy