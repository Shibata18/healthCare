import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import api from '../../services/api';

export default function ListaProfissional() {
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
            getOptionLabel={(option) => option.cpfUser}
            renderOption={(option) => (
                <React.Fragment>
                    {option.ehMedico ?
                        <>{option.cpfUser} - {option.nome} <br/> {option.especialidade} </> : ""}
                </React.Fragment>
            )}
            renderInput={(params) => <TextField {...params} label="Lista de Profissionais" variant="outlined" />}
        />
    );
}
