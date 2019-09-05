import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Alert, Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

export default function Dashboard(props) {

    const [grow, setGrow] = useState({})
    const [waterHistory, setWaterHistory] = useState([])
    const [feedHistory, setFeedHistory] = useState([])

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
            console.log(response.data)
            setWaterHistory(response.data.dailyLogs.filter(log => log.didWater))
            setFeedHistory(response.data.dailyLogs.filter(log => log.didFeed))
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

    function ListData() {
        return (
                <ListGroup>
                    <ListGroup.Item><strong>Strain: </strong>{grow.strainName}</ListGroup.Item>
                    <ListGroup.Item><strong>Last Date Watered: </strong>{waterHistory.map((element, index) => index === 0 ? element.date : "" )}</ListGroup.Item>
                    <ListGroup.Item><strong>Last Data Fed: </strong>{feedHistory.map((element, index) => index === 0 ? element.date : "" )}</ListGroup.Item>
                </ListGroup>
        )
    }

    return (

        <Container>
            <Row>
                <Col className="text-right">
                    <Button onClick={event => {
                        event.preventDefault()
                        props.history.push(`/newseason/?grow_id=${grow._id}`)
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
                    <p><strong>Date Strated: </strong>{grow.dateStarted}}</p>
                </Col>
                <Col md={6} className="text-center">
                    <p><strong>Date Completed: </strong>{grow.dateCompleted}</p>
                </Col>
            </Row>

            <Row>
                <ListData />
            </Row>
        </Container>

    )
}