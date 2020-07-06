import React, { useState } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import api from '../../../services/api';
import { Button, InputLabel } from '@material-ui/core';

function Prontuario() {
    const [textoProntuario, setTextoProntuario] = useState('');
    const idAgenda = localStorage.getItem('idAgenda');
    async function prontuarioSubmit(e) {
        e.preventDefault();
        try {
            const response = await api.post(`/agenda/${idAgenda}/prontuario`,{prontuario:textoProntuario});
            console.log(response.status);
            return alert("Enviado com sucesso");
        } catch (error) {
            console.log(error);
            alert('Houve um erro ao enviar')
        }
    }
    return (
        <form onSubmit={prontuarioSubmit}>
            <InputLabel variant='standard'>Prontuário</InputLabel>
            <TextareaAutosize
                rowsMax={30}
                rowsMin={8}
                placeholder="Escreva aqui o feedback para o paciente"
                value={textoProntuario}
                onChange={e => setTextoProntuario(e.target.value)}
            />
            <Button variant="contained" type='submit'>Enviar</Button>
        </form>
    )
}

export default Prontuario;