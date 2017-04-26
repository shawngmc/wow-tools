import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';
import './App.css';

var toolEntries = require('./tools/tools.json');

const Home = () => (
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>  
  )

  const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
)

class App extends Component {

  

  render() {
    return (
      <Router>
      <div>
        <Navbar inverse staticTop collapseOnSelect>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">WoW Tools</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem><Link to="/about">About</Link></NavItem>
            <NavItem><Link to="/topics">Topics</Link></NavItem>
              </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>

      </div>
      </Router>
    );
  }
}

export default App;
