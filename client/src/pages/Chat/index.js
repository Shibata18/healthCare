import React, { Component } from "react";
//import socket from "./wesocket";
import Navbar from '../Admin/Navbar'
//import api from '../../services/api';
import { Box, Grid ,Container,Typography} from '@material-ui/core';

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
}
//const iframe = `<iframe src="https://tokbox.com/embed/embed/ot-embed.js?embedId=759b1cc2-24e0-454f-80dd-6dc4f6725215&room=DEFAULT_ROOM&iframe=true" width="800" height="700" scrolling="auto" allow="microphone; camera" ></iframe>`;                
const iframe =  '<iframe  src="https://tokbox.com/embed/embed/ot-embed.js?embedId=838a2b8c-962a-427f-be71-3225bc0eec99&room=DEFAULT_ROOM&iframe=true"  width=800  height=640  scrolling="auto"  allow="microphone; camera"></iframe>';
class ChatApp extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Container>
          <div>
            <Box color="text.primary" component="div" m={1} border={1} style={{ padding: 80 }}>
            <Typography variant="h2" gutterBottom>Vídeo Chamada </Typography>
              <Grid item xs={12}>
                <Iframe iframe={iframe} />
              </Grid>
            </Box>
          </div>
        </Container>
      </>
    );
  }
}
export default ChatApp;
