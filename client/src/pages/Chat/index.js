import React, { Component } from "react";
import Navbar from '../Navbar'
import { Container } from '@material-ui/core';
import './App.css'
import Prontuario from './prontuario'
import ModalForm from "./modalForm";
function Iframe(props) {
    return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
}
/* const iframe2 = `
<iframe
  src="https://tokbox.com/embed/embed/ot-embed.js?embedId=3f921956-053c-4671-aa28-dc2a4296cd44&room=DEFAULT_ROOM&iframe=true"
  scrolling="auto"
  allow="microphone; camera"
></iframe>
`; */
const iframe1 = `
<iframe
  src="https://tokbox.com/embed/embed/ot-embed.js?embedId=17fb3998-7b3b-4808-8e23-411f391cc522&room=DEFAULT_ROOM&iframe=true"
  scrolling="auto"
  allow="microphone; camera"
></iframe>
`;
const agendaId = localStorage.getItem('idAgenda')
const newIframe = iframe1.replace('DEFAULT_ROOM', `sala${agendaId}`);
const ehMedico = localStorage.getItem('ehMedico');
class ChatApp extends Component {

    render() {
        return (
            <>
                <Navbar />
                <Container>
                    <Iframe iframe={newIframe} />
                    {ehMedico === 'true'?
                    <Prontuario />
                    :<div></div>}
                    <ModalForm/>
                </Container>
            </>
        );
    }
}
export default ChatApp;

