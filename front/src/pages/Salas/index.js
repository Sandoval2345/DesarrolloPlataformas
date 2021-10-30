import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Contenedor } from '../../components';

const baseUrl = 'http://localhost:5432/pruebabas'

export default function Salas() {

    const [data, setData] = useState([]);

    const peticionGet = async() =>{
        await axios.get(baseUrl)
        .then(response =>{
            console.log(response.data);
        })
    }

    useEffect (async() =>{
        await peticionGet();
    },[])


    return (
        <div>
            <Contenedor/>
            Salas
        </div>
    )
}
