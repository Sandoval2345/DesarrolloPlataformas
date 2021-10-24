//import './App.css';
import React, {useState} from 'react';
//import { ContenedorMallas } from '../../components'
import { Contenedor } from '../../components'  
import { Box, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor: "white",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        height: '100vh',
        width: '300vh'
        //justifyContent: 'center',
        
    },
    text:{
        textAlign: 'center',
        marginTop: theme.spacing(5),
       
        color: 'black'
    },
    button:{
        width: '5%',
        margin: theme.spacing(5,155,10),
        //marginTop: theme.spacing() ,
        
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
            margin: theme.spacing(0),
            width: '100%',
            height: '100%'
        }
    },
  

}))

export default function AppMallas(){
    const classes = useStyles() 
    return (
        <div>
            <Contenedor/>
            <Grid container component = 'main' className = {classes.root}>
                <h1 className = {classes.text} > Mallas Curriculares </h1>
                <Button variant = 'contained'
                        color = 'primary'
                        size = 'large'
                        className = {classes.button}
                        endIcon = {<DownloadForOfflineIcon fontSize = 'large' />}
                >
                    Descargar
                </Button>
                <Button variant = 'contained'
                        color = 'primary'
                        size = 'large'
                        className = {classes.button}
                        endIcon = {<DownloadForOfflineIcon fontSize = 'large'/>}
                >    
                    Descargar
                </Button>
                <Button variant = 'contained'
                        color = 'primary'
                        size = 'large'
                        className = {classes.button}
                        endIcon = {<DownloadForOfflineIcon fontSize = 'large'/>}
                >
                    Descargar
                </Button>
            </Grid>
        </div>
    )
}
   
