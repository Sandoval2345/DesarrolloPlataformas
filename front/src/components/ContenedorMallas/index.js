import React from 'react'
import { AppBar, Cajon, Box } from '../../components'
import{
    makeStyles, Hidden

} from '@material-ui/core';
import boxCentral from '../../pages/mallas';


const useStyles = makeStyles(theme=>({
    root:{
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content:{
        flexGrow: 1,
        padding: theme.spacing(3)
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
                <div className = {classes.toolbar}></div>
                <boxCentral/>
            </div>
            
        </div>
    )
}