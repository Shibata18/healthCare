import React from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {Container } from '@material-ui/core';
function Properties({ properties }) {
    return (
        properties.map(property => (
            <Container maxWidth="sm">
                <table>
                    <tr>
                        <td> ID </td>
                        <td> CPF </td>
                        <td> Nome </td>
                        <td> Email </td>
                        <td> Telefone </td>
                        <td> Especialidade </td>
                        <td> Conselho </td>
                        <td> Registro </td>
                        <td>Situação</td>
                        <td>Criado</td>
                        <td>Atualizado</td>
                    </tr>
                    <tr>
                        <td> {(property.id)}</td>
                        <td> {(property.cpfDoctor)}</td>
                        <td> {(property.nameDoctor)}</td>
                        <td> {(property.email)}</td>
                        <td> {(property.telefoneDoctor)}</td>
                        <td> {(property.especialidade)}</td>
                        <td> {(property.conselho)}</td>
                        <td> {(property.registro)}</td>
                        <td> {(property.ativo_medico ? `ativo` : `inativo`)}</td>
                        <td> {(property.created_at)}</td>
                        <td> {(property.updated_at)}</td>
                    </tr>
                </table>
            </Container>
        )
        ))
}
Properties.propTypes = {
    properties: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            cpfDoctor: PropTypes.String,
            email: PropTypes.String,
            nameDoctor: PropTypes.String,
            conselho: PropTypes.String,
            especialidade: PropTypes.String,
            telefoneDoctor: PropTypes.String,
            ativo_medico: PropTypes.Boolean,
        })
    ).isRequired
};

export default Properties;