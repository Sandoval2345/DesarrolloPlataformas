import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {  LockOutlined as LockOutlinedIcon } from '@material-ui/icons'




const useStyles = makeStyles(theme=>({
    root:{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },
    container:{
        opacity: '0.8',
        height: '70%', //largo del contenedor
        marginTop: theme.spacing(10), //altura del contenedor
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{ //responsive
            marginTop: 0,
            width: '100%',
            height: '100%'
        }
    },
    div:{
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

    },
    avatar:{
        margin: theme.spacing(6),
        backgroundColor: theme.palette.primary.main
       
    },
    form:{
        width: '100%',
        marginTop: theme.spacing(1)
    },
    button:{
        margin: theme.spacing(3, 0, 2) //mrgen general
        
    }

}))

export default function Login() {
    const [body, setBody] = useState({correoInst: ''}) //el nombre de la variable debe ser igual al 'name' del textField que utilizare, en este caso 'correoInst'. Aqui se guarda lo que se escriba por pantalla 
    const classes = useStyles() 

    const handleChange = e =>{ //e = evento y es lo que recibe la funcion y nos trae los atributos del textfield o input
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })

    }

    return (
        <div>
            <Grid container component ='main' className={classes.root}>
                <Container component={Paper} elevation={5} maxWidth = 'xs' className = {classes.container}> 
         
                    <div className = {classes.div}>
                        <Avatar className = {classes.avatar}> 
                            <LockOutlinedIcon / /*ICONO DE CANDADO*/> 
                        </Avatar>
                        <Typography component = 'h1' variant = 'h4'> Sign In </Typography>
                        <form className = {classes.form}>
                            <TextField //input de usuario
                                
                                fullWidth
                                required
                                autoFocus //enfocado en input de usuario
                                color = 'primary'
                                margin = 'normal'
                                variant = 'outlined'
                                label = 'Correo Institucional'
                                name = 'correoInst'
                                value = {body.correoInst}
                                onChange = {handleChange} //detecta cambios en los textfields (inputs)
                            />
                            <Button
                                fullWidth
                                variant = 'contained'
                                color = 'primary'
                                className = {classes.button}
                            >
                                Ingresar
                            </Button>    
                        

                            
                        </form>
                    </div>
                </Container>
 
            </Grid>
        </div>
    )
}
