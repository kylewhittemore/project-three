import React from "react";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import StaticForm from '../../components/StaticForm/StaticForm'
import LeftSliderBar from '../../components/LeftSliderBar/LeftSliderBar'
import { Redirect } from "react-router-dom";


function NewSeasonPage(props) {
    // console.log(props)

    const userId = localStorage.getItem('p3aajjkw-id')

    if (!userId) {
        return (
            <Redirect to={'/'} />
        )
    }

    let growId;

    let url = window.location.href;

    if (url.indexOf("?grow_id=") !== -1) {
        growId = url.split("=")[1]
    };


    return (
        <>
            <LeftSliderBar {...props} />
            <div className="align-me">
                <StaticForm {...props} growId={growId} userId={userId} />
                <p></p>
            </div>
        </>
    );
};

export default NewSeasonPage;