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
            userId={'5d630c1ab4e4e29f0dfb5830'} 
            growId={'5d630cabb255c29f4f1e2178'} 
            logId={'5d630ceace36969f5fc95039'} />
        </div>
    );
};

export default DailyLogPage;