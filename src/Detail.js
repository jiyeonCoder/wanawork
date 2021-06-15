import React, { useState } from 'react';
import {Button, Navbar, Nav, NavDropdown, Form, FormControl, Jumbotron, Container, Row, Col} from 'react-bootstrap';
import { useHistory, useParams, Link } from 'react-router-dom';

function Detail(props){

    let {id} = useParams();//Take any numbers after '/' of the main address.
    let matchedId = props.programs.find(function(program){
        return program.id == id
    });
    let history = useHistory();
    

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={matchedId.src} width="100%" />
                </div>
                <div className="col-md-8 mt-4">
                    <h4 className="pt-5">{matchedId.title}</h4>
                    <p>{matchedId.content}</p>
                    <Button variant="danger" href={matchedId.file}>Download</Button>
                    &nbsp; 
                    <Button variant="danger" onClick={ ()=>{ history.goBack(); } }>Go Back</Button>
                </div>
            </div>
        </div>
    )
}

export default Detail;