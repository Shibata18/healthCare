import React from 'react';
import ListaPacientes from './listaPacientes';
import ListaProfisional from './ListaProfissional';



export default function ListaCompleta() {

    return (
        <div>
            <p>Lista de Profissionais Cadastrados</p>
            <ListaProfisional />
            <p>Lista de Pacientes Cadastrados</p>
            <ListaPacientes />
            <hr />
        </div>
    );
}
