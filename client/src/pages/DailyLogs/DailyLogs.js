import React from "react";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyLogTable from '../../components/DailyLogTable/DailyLogTable'
import LeftSliderBar from '../../components/LeftSliderBar/LeftSliderBar'

function DailyLogPage(props) {
    return (
        <>
            <LeftSliderBar {...props} />
            <div className="align-me">
                <DailyLogTable {...props} />
            </div>
        </>
    );
};

export default DailyLogPage;