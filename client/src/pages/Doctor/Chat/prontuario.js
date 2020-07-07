import React, { useState } from 'react';
import api from '../../../services/api';
import { Button, Container } from '@material-ui/core';

function Prontuario() {
    const [textoProntuario, setTextoProntuario] = useState('');
    const idAgenda = localStorage.getItem('idAgenda');
    async function prontuarioSubmit(e) {
        e.preventDefault();
        try {
            const response = await api.post(`/agenda/${idAgenda}/prontuario`, { prontuario: textoProntuario });
            console.log(response.status);
            return alert("Enviado com sucesso");
        } catch (error) {
            console.log(error);
            alert('Houve um erro ao enviar')
        }
    }
    return (
        <Container>
            <form onSubmit={prontuarioSubmit}>
                <textarea
                    cols='90'
                    rows='5'
                    value={textoProntuario}
                    placeholder="Prontuario: Escreva aqui o feedback para o paciente"
                    onChange={e => setTextoProntuario(e.target.value)}
                />
                <Button variant="contained" size='medium' type='submit'>Enviar</Button>
            </form>
        </Container>
    )
}

export default Prontuario;