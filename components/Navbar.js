import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography } from '@material-ui/core'

function Navbar(props) {
    return (
        <AppBar style={{}}>
            <Toolbar>
                <Typography variant="h5">{ props.name }</Typography>
            </Toolbar>
         </AppBar>
        )
}

export default Navbar
