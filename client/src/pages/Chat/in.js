import React,{useState,useEffect} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import Navbar from '../Navbar'
import {Link} from 'react-router-dom';
import socket from './wesocket';
import api from '../../services/api'
import DevItem from './Item'
import DevForm from './Input'

export default function Teste(){

  const [chat,setChat] = useState([]);

  useEffect(() => {
   async function loadMensagens() {
     const response = await api.get('/chat')

     setChat(response.data)
   }
   loadMensagens();
 }, []);
    async function enviarMensagens(){
      const data = {chat};
      socket.on('message',(data)=>{
        chat.push(data)
      });
      socket.emit('message',data);
      await api.post('/chat',data).then(res=>console.log(res)).catch(err=>console.error(err))
    }
    return (
      <>
      <Navbar/>
      <Container>
        <p>
            <p>  {chat.map(dev => (
                <DevItem key={dev._id} dev={chat} />
              ))
              }</p>
        </p>
        <DevForm onSubmit={enviarMensagens} />
      </Container>
      </>
    )
}
