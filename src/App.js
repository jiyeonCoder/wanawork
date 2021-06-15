/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Jumbotron, Container, Row, Col} from 'react-bootstrap';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';


function App() {

  let [programs, programsEd] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand> <Link to="/"><img src="/wanawork_logo.png" /></Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="All" id="basic-nav-dropdown">
              <NavDropdown.Item> <Link to="/all-programs">All Programs</Link> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Games</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Utilities</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Q&A</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link> <Link to="/games">Games</Link> </Nav.Link>
            <Nav.Link> <Link to="/utilities">Utilities</Link> </Nav.Link>
            <Nav.Link> <Link to="/q&a">Q&A</Link> </Nav.Link>
            <Nav.Link> <Link to="/contact">Contact</Link> </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Switch> //show only one Route

        //Main page
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>Welcome to WanaWork!</h1>
            <p>
              This website is to share Jiyeon's programs to everyone. 
              <br/> 
              You can download and run the programs for free. Please leave your comments on it.<br/> 
              Enjoy the programs!
            </p>
            <br/>
            <p>
              <Link to="/all-programs" className="look-programs-bt">Look at Programs</Link>
            </p>
          </Jumbotron>

          <Container>
            <Row>
              {
                programs.map((a, i)=>{
                  return <Card programs={programs[i]} i={i} key={i}/>
                })
              }
            </Row>
          </Container>

          <Jumbotron fluid className="footer">
            <Container>
              <h5>📞 Contact Me</h5>
              <p>
                e-mail: jiyeon.choi218@gmail.com <br/>
                GitHub: https://github.com/jiyeonCoder
              </p>
            </Container>
          </Jumbotron>
        </Route>

        //All-programs page
        <Route path="/all-programs">
          <Row>
            {
              programs.map((a, i)=>{
                return <Card programs={programs[i]} i={i} key={i}/>
              })
            }
          </Row>
        </Route>

        //Contact Page
        <Route path="/contact">
          <Jumbotron fluid className="contact">
            <Container>
              <h1>Contact Me</h1>
            </Container>
          </Jumbotron>
          <div className="contact-content">
            <p className="contact-detail1">
              You can check the detail code for each programs through GitHub as well.<br/> 
              If you would like to contact me, suggest any idea, or experience any technical issues, please conatact me through email address.
            </p>
            <p className="contact-detail2">
            📧 e-mail: jiyeon.choi218@gmail.com <br/>
            🌎 GitHub: https://github.com/jiyeonCoder
            </p>
            <p className="contact-detail3">
              Thank you for your time!
            </p>
          </div>
        </Route>

        //Detail page
        <Route path="/detail/:id">
            <Detail programs={programs} />
        </Route>

      </Switch>

    </div>
  );
}

function Card(props){
  return (
    <Col md>
      <Link to={props.programs.linkid}>
        <img src={props.programs.src}></img>
      </Link>
      <h4>{props.programs.title}</h4>
      <p>{props.programs.content}</p>
    </Col>
  )
}



export default App;