import React from 'react'
import MaterialTable from 'material-table';
import { Contenedor } from '../../components'
import { AlignHorizontalCenter } from '@mui/icons-material';



export default function Mallas() {

    const columnas=[
        {
            title:'CARRERAS',
            field:'carreras'
        },
  
    ];
    const data=[
        {carreras: 'Ingenieria Civil en Computacion e Informatica'},
        {carreras: 'Ingenieria Civil Industrial'},
        {carreras: 'Ingenieria en Tecnologias de Informacion'}

    ];
    return (
        <div>
            <Contenedor/>
            <MaterialTable
                columns={columnas}
                data = {data}
                title = 'Mallas Academicas'
                actions = {[
                    {
                        icon: 'check',
                        tooltip: 'Malla Antigua',
                    },
                    {
                        icon: 'check',
                        tooltip: 'Malla Nueva'
                    }
                ]}
                options={{
                    actionsColumnIndex:20
                }}
                localization ={{
                    header:{
                        actions: 'Malla Antigua / Malla Nueva',
                        
                    }

                }}
            />
             
            

        </div>
    )
}
