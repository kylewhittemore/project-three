import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import GrowTable from '../../components/GrowTable/GrowTable'


function SeasonsPage() {
    return (
        <div className="align-me">
            <GrowTable />
        </div>
    );
};

export default SeasonsPage;