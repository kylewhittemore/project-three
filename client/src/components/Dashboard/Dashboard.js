import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import { Alert, Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import fmt from '../../utils/formatTime'

// import moment from 'moment'
// const t = require('../../utils/formatTime')

export default function Dashboard(props) {

    const [grow, setGrow] = useState({})
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
            }
            return response
        }

        async function fetchUserData() {
            let data = await Axios.get(`/api/user/profile`)
            let user = data.data.user
            // return user
            let response = await fetchGrow(user.defaultGrow)
            setGrow(response.data)
            // console.log(response.data)
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
                console.log("fetch user data response:  ", response)
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

    function ListData() {
        return (
                <ListGroup>
                    <ListGroup.Item><strong>Strain: </strong>{grow.strainName}</ListGroup.Item>
                    <ListGroup.Item><strong>Last Date Watered: </strong>{waterHistory.map((element, index) => index === 0 ? formatDate(element.date) : "" )}</ListGroup.Item>
                    <ListGroup.Item><strong>Last Data Fed: </strong>{feedHistory.map((element, index) => index === 0 ? formatDate(element.date) : "" )}</ListGroup.Item>
                    <ListGroup.Item><strong>Last Date Transplanted: </strong>{transplantHistory.map((element, index) => index === 0 ? formatDate(element.date) : "" )}</ListGroup.Item>
                    <ListGroup.Item><strong>Last Data Defoliated: </strong>{defoliateHistory.map((element, index) => index === 0 ? formatDate(element.date) : "" )}</ListGroup.Item>
                    <ListGroup.Item><strong>Last Date Flipped: </strong>{flipHistory.map((element, index) => index === 0 ? formatDate(element.date) : "" )}</ListGroup.Item>
                    <ListGroup.Item><strong>Last Data Flushed: </strong>{flushHistory.map((element, index) => index === 0 ? formatDate(element.date) : "" )}</ListGroup.Item>
                </ListGroup>
        )
    }

    return (

        <Container>
            <Row>
                <Col className="text-right">
                    <Button onClick={event => {
                        event.preventDefault()
                        props.history.push(`/newseason/?grow_id=${props.growId}`)
                    }} variant="outline-dark" size="sm">Edit</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="text-center">{grow.seasonName}</h2>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="text-center">
                    <p><strong>Date Strated: </strong>{formatDateShort(grow.dateStarted)}</p>
                </Col>
                <Col md={6} className="text-center">
                    <p><strong>Date Completed: </strong>{formatDateShort(grow.dateCompleted)}</p>
                </Col>
            </Row>

            <Row>
                <ListData />
            </Row>
        </Container>

    )
}