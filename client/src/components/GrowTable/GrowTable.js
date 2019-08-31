import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Figure from 'react-bootstrap/Figure'
import Axios from 'axios'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import './style.css'

export default function GrowTable(props) {

    // const leafLink = '../../../public/leaf.png'
    const userId = localStorage.getItem('p3aajjkw-id')

    const [grows, setGrows] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchGrows() {
            setLoading(true);
            let response = await Axios.get(`/api/grow/user/${userId}`);
            let data = response.data
            console.log(JSON.stringify(data))
            return data;
        }
        fetchGrows().then(data => {
            setGrows(data)
            // console.log(JSON.stringify)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }, [userId]);

    // function goToDetails(growId) {
    //     return (
    //         <StaticHeader {...props} growId={growId} />
    //     )
    // }


    // If the logs are loading display a spinner, otherwise render the table from state
    return (
        loading ?
            <LoadingSpinner />
            :
            <Container>
                   {grows.map(grow => (
                    <div key={grow._id}>
                        <Row >
                            <Col >
                                <h2 className="font-italic">{grow.seasonName}</h2>
                                <p >System Id: {grow._id}</p>
                            </Col>
                            <Col md="auto">
                                <div >
                                    <Button onClick >Details</Button>
                                    <Button >Make Default</Button>
                                </div>
                            </Col>
                        </Row>
                        <Row >
                            <Col md={4}>
                                <Figure>
                                    <Figure.Image
                                        width={152}
                                        height={152}
                                        alt="171x180"
                                        src="./leaf.png"
                                    />
                                    <Figure.Caption>
                                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col md={8}>
                                <ListGroup>
                                    <ListGroup.Item>Strain Name: {grow.strainName}</ListGroup.Item>
                                    <ListGroup.Item>Breeder: {grow.breeder}</ListGroup.Item>
                                    <ListGroup.Item>Start Date: {grow.dateStarted
                                        ? grow.dateStarted.slice(0, 10)
                                        : "Not Started"} </ListGroup.Item>
                                    <ListGroup.Item>Date Completed: {!grow.dateCompleted && !grow.dateStarted
                                        ? ''
                                        : grow.dateCompleted
                                            ? grow.dateCompleted.slice(0, 10)
                                            : "In Progress"} </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </div>
                ))}
            </Container>
    )

}
