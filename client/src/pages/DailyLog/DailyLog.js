import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyLogForm from '../../components/DailyLogForm/DailyLogForm'


function DailyLogPage(props) {
    
    let logId
    let url = window.location.href

    if (url.indexOf("?log_id=") !== -1) {
        logId = url.split("=")[1]
        console.log(logId)
    }

    return (
        <div className="align-me">
            <DailyLogForm {...props} logId={logId} />
        </div>
    );
};

export default DailyLogPage;