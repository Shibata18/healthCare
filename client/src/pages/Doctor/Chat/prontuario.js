import React, { useState } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import api from '../../../services/api';
import { Button, InputLabel } from '@material-ui/core';

function Prontuario() {
    const [textoProntuario, setTextoProntuario] = useState('');
    async function prontuarioSubmit(e) {
        e.preventDefault();
        try {
            const response = await api.post(`/agenda/1/prontuario`,{prontuario:textoProntuario,agenda_id:1});
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
                rowsMin={25}
                placeholder="Escreva aqui o feedback para o paciente"
                value={textoProntuario}
                onChange={e => setTextoProntuario(e.target.value)}
            />
            <Button variant="contained" type='submit'>Enviar</Button>
        </form>
    )
}

export default Prontuario;