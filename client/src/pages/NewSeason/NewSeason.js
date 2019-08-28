import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import StaticForm from '../../components/StaticForm/StaticForm'


function NewSeasonPage(props) {
    console.log(props)

    let growId;
    let userId = '5d630c1ab4e4e29f0dfb5830'
    let url = window.location.href;

    if (url.indexOf("?grow_id=") !== -1) {
        growId = url.split("=")[1]
        console.log("GROW ID %%%%%%", growId)
    };


    return (
        <div className="align-me">
            <StaticForm {...props} growId={growId} userId={userId}/>
            <p></p>
        </div>
    );
};

export default NewSeasonPage;