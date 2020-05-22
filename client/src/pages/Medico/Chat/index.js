import React, { Component } from "react";
//import socket from "./wesocket";
import Navbar from '../Navbar';
//import api from '../../services/api';                         
import { Box, Grid, Container, Typography, Tabs, Tab } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import './style.css';

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
}
//const iframe1 = `<iframe src="https://tokbox.com/embed/embed/ot-embed.js?embedId=759b1cc2-24e0-454f-80dd-6dc4f6725215&room=ROOM1&iframe=true"  scrolling="auto" allow="microphone; camera" ></iframe>`;
//const iframe2 = `<iframe src="https://tokbox.com/embed/embed/ot-embed.js?embedId=759b1cc2-24e0-454f-80dd-6dc4f6725215&room=ROOM2&iframe=true"  scrolling="auto" allow="microphone; camera" ></iframe>`;
//const iframe3 = `<iframe src="https://tokbox.com/embed/embed/ot-embed.js?embedId=759b1cc2-24e0-454f-80dd-6dc4f6725215&room=ROOM3&iframe=true"  scrolling="auto" allow="microphone; camera" ></iframe>`;
//const iframe4 = `<iframe src="https://tokbox.com/embed/embed/ot-embed.js?embedId=759b1cc2-24e0-454f-80dd-6dc4f6725215&room=ROOM4&iframe=true"  scrolling="auto" allow="microphone; camera" ></iframe>`;
//const iframe5 = `<iframe src="https://tokbox.com/embed/embed/ot-embed.js?embedId=759b1cc2-24e0-454f-80dd-6dc4f6725215&room=ROOM5&iframe=true"  scrolling="auto" allow="microphone; camera" ></iframe>`;
//const iframe6 = `<iframe src="https://tokbox.com/embed/embed/ot-embed.js?embedId=759b1cc2-24e0-454f-80dd-6dc4f6725215&room=ROOM6&iframe=true"  scrolling="auto" allow="microphone; camera" ></iframe>`;
const iframe1 = '<iframe  src="https://tokbox.com/embed/embed/ot-embed.js?embedId=838a2b8c-962a-427f-be71-3225bc0eec99&room=ROOM1&iframe=true"  width=800  height=640  scrolling="auto"  allow="microphone; camera"></iframe>';
const iframe2 = '<iframe  src="https://tokbox.com/embed/embed/ot-embed.js?embedId=838a2b8c-962a-427f-be71-3225bc0eec99&room=ROOM2&iframe=true"  scrolling="auto"  allow="microphone; camera"></iframe>';
const iframe3 = '<iframe  src="https://tokbox.com/embed/embed/ot-embed.js?embedId=838a2b8c-962a-427f-be71-3225bc0eec99&room=ROOM3&iframe=true"  scrolling="auto"  allow="microphone; camera"></iframe>';
const iframe4 = '<iframe  src="https://tokbox.com/embed/embed/ot-embed.js?embedId=838a2b8c-962a-427f-be71-3225bc0eec99&room=ROOM4&iframe=true"  scrolling="auto"  allow="microphone; camera"></iframe>';
const iframe5 = '<iframe  src="https://tokbox.com/embed/embed/ot-embed.js?embedId=838a2b8c-962a-427f-be71-3225bc0eec99&room=ROOM5&iframe=true"  scrolling="auto"  allow="microphone; camera"></iframe>';
const iframe6 = '<iframe  src="https://tokbox.com/embed/embed/ot-embed.js?embedId=838a2b8c-962a-427f-be71-3225bc0eec99&room=ROOM6&iframe=true"  width=800  height=640  scrolling="auto"  allow="microphone; camera"></iframe>';
class ChatApp extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Container>
          <div>
            <Box color="text.primary" component="div" m={1} border={1} style={{ padding: 80 }}>
              <Typography variant="h2" gutterBottom>Vídeo Chamada </Typography>
              <NavTabs />
            </Box>
          </div>
        </Container>
      </>
    );
  }
}
export default ChatApp;


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <LinkTab label="Sala 1"  {...a11yProps(0)} />
          <LinkTab label="Sala 2"  {...a11yProps(1)} />
          <LinkTab label="Sala 3"  {...a11yProps(2)} />
          <LinkTab label="Sala 4"  {...a11yProps(3)} />
          <LinkTab label="Sala 5"  {...a11yProps(4)} />
          <LinkTab label="Sala 6"  {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid item xs={12}>
          <Iframe iframe={iframe1} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid item xs={12}>
          <Iframe iframe={iframe2} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid item xs={12}>
          <Iframe iframe={iframe3} />
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Grid item xs={12}>
          <Iframe iframe={iframe4} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid item xs={12}>
          <Iframe iframe={iframe5} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Grid item xs={12}>
          <Iframe iframe={iframe6} />
        </Grid>
      </TabPanel>
    </div>
  );
}
