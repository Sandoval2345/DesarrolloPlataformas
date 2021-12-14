import React,  {useEffect,useState }from 'react'
import { Grid, Button, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Contenedor } from '../../components'
import TimelineIcon from '@mui/icons-material/Timeline'
import { SelectSemestre } from '../../components'
import axios from 'axios';

import XLSX from 'xlsx';



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
    select:{
        marginRight: theme.spacing(8)
        
    },
    div1:{
        margin: theme.spacing(3, 70, 2),
        flexDirection: 'column',
        alignItems: 'center',
        

    },
    div2:{
        margin: theme.spacing(3, 70, 2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
       
}))




export default function OfertaAcademica() {
    const classes = useStyles() 

    const [datas, setData] = useState([]);
    const [semestreSeleccionado, setSemestreSeleccionado] = useState({
        semestre:''
    })

    const getOfertas = async() => {
        await axios.get('/api/oferta/getofertas/' + semestreSeleccionado)
        .then(response => {
            setData(response.data)
        })
    }
    useEffect (()=>{
        getOfertas();
    },[])

    const handleChange=e=>{
        const {name,value}=e.target;
        setSemestreSeleccionado(prevState=>({
            ...prevState,
            [name]: value
        }))
        console.log(semestreSeleccionado)
    }
    const DataSet = datas.map((oferta)=>(

        {
        Semestre: oferta.semestre,
        ECIN: oferta.ecin,
        Dpto: oferta.departamento,
        Paralelos: oferta.cantparalelos,
        Demanda: oferta.demandaestimada
    }
    ))
    console.log(DataSet)
    const downloadExcel = ()=>{
        const workSheet = XLSX.utils.json_to_sheet(DataSet)
        const workBook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workBook,workSheet,"ofertaAcademica")

        let buf = XLSX.write(workBook,{bookType:"xlsx",type:"buffer"})
        XLSX.write(workBook,{bookType:'xlsx',type:"binary"})
        XLSX.writeFile(workBook,"OfertaAcademica.xlsx")
    }
    return (
        <div>
            <section >
                <Contenedor/>
                <h2 className = { classes.text }>Haz clic en el boton para generar la sugerencia de Oferta Academica</h2>
                {/*<div className = {classes.div1} style = {{width:'150px',margin:'auto'}}><SelectCarr /></div>*/}
                <br/><br/>
                <div className = {classes.div2} style = {{width:'200px',margin:'auto'}}>
                    <TextField
                        fullWidth
                        color = 'primary'
                        margin = 'normal'
                        variant = 'outlined'
                        label = 'Ingerese año-semestre. Ej:2021-2'
                        name = 'semestre'
                        value = {semestreSeleccionado.semestre}
                        onChange = {handleChange}
                    />   
                </div>

                <Grid align = 'center' className={classes.root}>
                    <Button
                        type = "button" 
                        variant = 'contained' 
                        color = 'primary' 
                        size = 'large' 
                        endIcon = {<TimelineIcon fontSize = 'large'/>} 
                        className = {classes.button}
                        onClick = {() => downloadExcel()}
                    >
                        GENERAR OFERTA ACADEMICA
                    </Button>
                </Grid>


                    
            </section>
     

        </div>
       
    )
}

 