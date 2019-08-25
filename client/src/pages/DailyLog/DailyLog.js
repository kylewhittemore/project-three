import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyLogForm from '../../components/DailyLogForm/DailyLogForm'


function DailyLogPage(props) {
    
    let logId
    let growId
    let userId

    let url = window.location.href

    if (url.indexOf("?log_id=") !== -1) {
        logId = url.split("=")[1]
        console.log(logId)
    }
    else if (url.indexOf("?grow_id=") !== -1) {
        growId = url.split("=")[1]
        console.log(growId)
    }

    return (
        <div className="align-me">
            <DailyLogForm {...props} 
            userId={'5d62f4ef67b1c19c4a06f420'} 
            growId={'5d62f6bb42d0239cbc08a6be'} 
            logId={'5d62f70fb039099cdbd55790'} />
        </div>
    );
};

export default DailyLogPage;