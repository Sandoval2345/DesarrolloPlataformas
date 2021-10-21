import React from 'react'
import { Grid, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Contenedor } from '../../components'
import TimelineIcon from '@mui/icons-material/Timeline'
//import { AppBar } from '../../components'




const useStyles = makeStyles(theme=>({
    root:{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '10vh',
        justifyContent: 'center',
        
    },
    text:{
        textAlign: 'center',
        marginTop: theme.spacing(5),
       
        color: 'white'
    },
    button:{
        width: '40%',
        //margin: theme.spacing(10,65,10),
        marginTop: theme.spacing(15) ,
        
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
            margin: theme.spacing(0),
            width: '100%',
            height: '100%'
        }
    },
  

}))

export default function OfertaAcademica() {

    const classes = useStyles() 

    return (
        <div>
            <Contenedor/>
            <h2 className = { classes.text }>Haz clic en el boton para generar la sugerencia de Oferta Academica</h2>
            <Grid container component ='main' className={classes.root}>
                <Button
                    
                    variant = 'contained'
                    color = 'primary'
                    size = 'large'
                    endIcon = {<TimelineIcon fontSize = 'large'/>}
                    className = {classes.button}
                    
                >
                    
                    GENERAR OFERTA ACADEMICA
                    
                    
                </Button>
            </Grid>

            
        </div>
       
    )
}

 