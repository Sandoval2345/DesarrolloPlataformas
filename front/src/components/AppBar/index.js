import React from 'react'
import { Button, Toolbar,AppBar, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'




const useStyles = makeStyles(theme =>({

    offset: theme.mixins.toolbar, //hace al sitio responsive
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
        
    },
    title: {
        flexGrow:1,
        
    },
    appBar:{
        [theme.breakpoints.up('sm')]:{
            width:`calc(100% - ${240}px)`,
            marginLeft: 240
        }
    }
    

}))


export default function Barra(props) {

    const classes = useStyles()

    return (
        
        <AppBar className = { classes.appBar}>
            <Toolbar>
                <IconButton
                    className = {classes.menuButton}
                    color = 'inherit'
                    aria-label = 'menu'
                    onClick = {() => props.accionAbrir()}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    variant='h6'
                    className = {classes.title}
                >
                    Sistema Generador de Oferta Academica
                </Typography>
                

                <Button
                    
                    variant = 'contained'
                    color = 'primary'
                >
                    Logout
                </Button>
                
            </Toolbar>
        </AppBar>
        
        
    )
}


