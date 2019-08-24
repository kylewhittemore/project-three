import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyLogForm from '../../components/DailyLogForm/DailyLogForm'


function DailyLogPage(props) {
    return (
        <div className="align-me">
            <DailyLogForm {...props} />
        </div>
    );
};

export default DailyLogPage;