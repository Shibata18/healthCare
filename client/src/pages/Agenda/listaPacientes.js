import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import api from '../../services/api';

export default function ListaPacientes() {
    const [dadosPaciente, setDadosPaciente] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await api.get('/dadosPaciente');
                setDadosPaciente(response.data)
            } catch (error) {
                console.log(error);
                alert("Erro em carregar os dados")
            }
        }
        getItems()
    }, []);
    return (
        <Autocomplete
            id="lista_pacientes"
            options={dadosPaciente}
            getOptionLabel={(option) => option.nome}
            renderOption={(option) => (
                <React.Fragment>
                    {option.cpfUser} - {option.nome} 
                </React.Fragment>
            )}
            renderInput={(params) => <TextField {...params} label="Lista de Pacientes" variant="outlined" />}
        />
    );
}
