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
    return (
        <div className="align-me">
            <StaticForm {...props}/>
            <p></p>
        </div>
    );
};

export default NewSeasonPage;