
import React from 'react'
import { AppBar, Cajon, Box } from '../../components'
import{
    makeStyles, Hidden, Button, Grid

} from '@material-ui/core';


const useStyles = makeStyles(theme=>({
    root:{
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content:{
        padding: theme.spacing(0)
    },


}))

export default function ContenedorMallas() {

    const classes = useStyles()
    const [abrir, setAbrir] = React.useState(false)
    const accionAbrir = () => {
        setAbrir(!abrir)
    }
    return (
        <div className = {classes.root}>
            <AppBar accionAbrir = { accionAbrir }/>
            <Hidden xsDown>
                <Cajon
                    variant = 'permanent'
                    open = { true }
                />
            </Hidden>
            <Hidden smUp>
                <Cajon
                    variant = 'temporary'
                    open = { abrir }
                    onClose = {accionAbrir}
                />
            </Hidden>
            <div className = { classes.content }>
            <Grid container component = 'main' className = {classes.content}>
                <h1 className = {classes.text} > Mallas Curriculares </h1>
                <Button variant = 'contained'
                        color = 'primary'
                        size = 'large'
                        className = {classes.button}
                >
                    c    
                </Button>
                <Button variant = 'contained'
                        color = 'primary'
                        size = 'large'
                        className = {classes.button}
                >
                    c    
                </Button>
                <Button variant = 'contained'
                        color = 'primary'
                        size = 'large'
                        className = {classes.button}
                >
                    c    
                </Button>
            </Grid>
            </div>
            
        </div>
    )
}
