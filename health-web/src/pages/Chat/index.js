import React,{useState,useEffect} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import Navbar from '../Navbar'
import {Link} from 'react-router-dom';
import Ws from '@adonisjs/websocket-client'

export default function Teste(){
  const sw = Ws('ws://localhost:3333',{
    path:"ws"
  })
  sw.connect();
  const socket = sw.subscribe('chat');
  const [mensagem,setMensagem] = useState('');
  const [chat,setChat] = useState([]);
  const messages = [];

  useEffect(() => {
   async function loadMensagens() {
     //const response = await api.get('/devs')

     //setChat(response.data)
   }
   loadMensagens();
 }, []);
 async function handleMensagem(data) {
   //const response = await api.post('/dev', data)

   //setChat([...devs, response.data])
   //console.log(response.data);
 }
    socket.on('message',(data)=>{
      messages.push(data)
    });
    function enviarMensagens(){
      const data = {mensagem};
      socket.emit('message',data);
      chat.push(data);
    }
    return (
      <>
      <Navbar/>
      <Container>
        <p>{ mensagem}        </p>
        <input type='text' id='mensagens' value={mensagem} onChange={e=>setMensagem(e.target.value)} />
        <button onClick={enviarMensagens()}>enviarMensagens</button>
      </Container>
      </>
    )
}
