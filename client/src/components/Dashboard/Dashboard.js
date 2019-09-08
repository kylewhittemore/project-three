import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import { Alert, Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import fmt from '../../utils/formatTime'
import DashboardChart from '../DashboardChart/DashboardChart'

import { set } from 'mongoose';


// import moment from 'moment'
// const t = require('../../utils/formatTime')

export default function Dashboard(props) {

    const [grow, setGrow] = useState({})
    const [growId, setGrowId] = useState({})
    const [waterHistory, setWaterHistory] = useState([])
    const [feedHistory, setFeedHistory] = useState([])
    const [transplantHistory, setTransplantHistory] = useState([])
    const [defoliateHistory, setDefoliateHistory] = useState([])
    const [flipHistory, setFlipHistory] = useState([])
    const [flushHistory, setFlushHistory] = useState([])

    useEffect(() => {

        async function fetchGrow(growId) {
            let response = await Axios.get(`/api/grow/${growId}`)
            if (props.growId) {
                setGrow(response)
                setGrowId(response._id)
            }
            return response
        }

        async function fetchUserData() {
            let data = await Axios.get(`/api/user/profile`)
            let user = data.data.user
            // return user
            let response = await fetchGrow(user.defaultGrow)
            setGrow(response.data)
            setGrowId(response.data._id)
            console.log("USER DATA", response.data)
            setWaterHistory(response.data.dailyLogs.filter(log => log.didWater))
            setFeedHistory(response.data.dailyLogs.filter(log => log.didFeed))
            setTransplantHistory(response.data.dailyLogs.filter(log => log.didFlip))
            setDefoliateHistory(response.data.dailyLogs.filter(log => log.didDefoliate))
            setFlipHistory(response.data.dailyLogs.filter(log => log.didFlip))
            setFlushHistory(response.data.dailyLogs.filter(log => log.didFlush))
            return response
        }

        if (props.growId) {
            fetchGrow(props.growId)
                .then(response => console.log(response))
        } else {
            fetchUserData()
                .then(response => {
                    console.log("fetch user data response: ", response.status, "number of dailyLogs:", response.data.dailyLogs.length)
                })
        }
    }, [])

    function formatDate(date) {
        // return moment(date, "YYYY-MM-DDTHH:mm:ss.SSS").format("dddd, MMMM Do YYYY")
        return fmt.longFmt(date)
    }

    function formatDateShort(date) {
        // return moment(date, "YYYY-MM-DDTHH:mm:ss.SSS").format("MM/DD/YY")
        return fmt.shortFmt(date)
    }

    function formatMonDateShort(date) {
        return fmt.shortMonFmt(date);
    };

    return (
        <div>
            <Container className="titleContainer">
                <Row className="mb-2">
                    <Col>
                        <h2 className="text-left seasonTitle text-capitalize">{grow.seasonName}</h2>
                    </Col>
                    <Col className="text-right">
                        <Button className="btn-info text-white" onClick={event => {
                            event.preventDefault()
                            props.history.push(`/newseason/?grow_id=${growId}`)
                        }} variant="outline-dark" size="sm">Edit</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="my-1 dashInfo "><strong className="dashInfoTitle">Date Started: </strong>{formatMonDateShort(grow.dateStarted)}</p>
                    </Col>
                    <Col>
                        <p className="my-1 dashInfo"><strong className="dashInfoTitle">Last Water: </strong>{waterHistory.map((element, index) => index === 0 ? formatDate(element.date) : "")}</p>
                    </Col>
                    <Col>
                        <p className="my-1 dashInfo"><strong className="dashInfoTitle">Last Transplant: </strong>{transplantHistory.map((element, index) => index === 0 ? formatDate(element.date) : "")}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="my-1 dashInfo"><strong className="dashInfoTitle">Harvest: </strong>{formatMonDateShort(grow.dateCompleted)}</p>
                    </Col>
                    <Col>
                        <p className="my-1 dashInfo"><strong className="dashInfoTitle">Last Feed: </strong>{feedHistory.map((element, index) => index === 0 ? formatDate(element.date) : "")}</p>
                    </Col>
                    <Col>
                        <p className="my-1 dashInfo"><strong className="dashInfoTitle">1st Day of Flower: </strong>{flipHistory.map((element, index) => index === 0 ? formatDate(element.date) : "")}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="my-1 dashInfo text-capitalize"><strong className="dashInfoTitle">Strain: </strong>{grow.strainName}</p>
                    </Col>
                    <Col>
                        <p className="my-1 dashInfo"><strong className="dashInfoTitle">Last Flush: </strong>{flushHistory.map((element, index) => index === 0 ? formatDate(element.date) : "")}</p>
                    </Col>
                    <Col>
                        <p className="my-1 dashInfo"><strong className="dashInfoTitle">Last Defoliated: </strong>{defoliateHistory.map((element, index) => index === 0 ? formatDate(element.date) : "")}</p>
                    </Col>
                </Row>
            </Container>
            <Container className="chartContainer">
                <DashboardChart {...props} />
            </Container>
        </div>
    )
}