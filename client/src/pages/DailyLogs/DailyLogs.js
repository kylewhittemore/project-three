import React from "react";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyLogTable from '../../components/DailyLogTable/DailyLogTable'

function NewSeasonPage() {
    return (
        <div className="align-me">
            <DailyLogTable />
        </div>
    );
};

export default NewSeasonPage;