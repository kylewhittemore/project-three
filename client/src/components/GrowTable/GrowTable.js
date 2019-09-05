import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Figure from 'react-bootstrap/Figure'
import Axios from 'axios'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Moment from "moment";

export default function GrowTable(props) {

    const userId = localStorage.getItem('p3aajjkw-id')

    const [grows, setGrows] = useState([])
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchGrows() {
            setLoading(true);
            let response = await Axios.get(`/api/grow/user/${userId}`);
            let data = response.data
            setLoading(false)
            return data;
        }
        async function fetchUser() {
            setLoading(true);
            let response = await Axios.get(`/api/user/profile`);
            let data = response.data
            setLoading(false)
            return data;
        }
        fetchGrows()
            .then(data => setGrows(data))
            .catch(err => console.log(err))
        fetchUser()
            .then(user => setUser(user.user))
            .catch(err => console.log(err))
    }, [userId]);

    async function setDefaultGrow(growId) {
        let user = await Axios.put(`/api/user/setDefaultGrow/${userId}`, { defaultGrow: growId })
        setUser(user.data)
        return user.data
    }

    return (
        loading ?
            <LoadingSpinner />
            :
            <Container className="seasonsPage mx-auto">
                {grows.map(grow => (
                    <div key={grow._id}>
                        <Container className="seasonBox">
                            <Row >
                                <Col className="boxTop">
                                    <h2 className="font-italic text-capitalize">{grow.seasonName}</h2>
                                    {/* <p >System Id: {grow._id}</p> */}
                                </Col>
                                <Col className="boxTop" md="auto">
                                    <div >
                                        <Button className="btn-primary gt-button btn-sm" onClick={event => {
                                            event.preventDefault()
                                            props.history.push(`/staticheader/?grow_id=${grow._id}`)
                                        }}>Details</Button>
                                        <Button className="btn-info gt-button btn-sm" onClick={event => {
                                            event.preventDefault()
                                            props.history.push(`/newseason/?grow_id=${grow._id}`)
                                        }}>Edit</Button>
                                        {(user.defaultGrow === grow._id)
                                            ? <Button className="btn-success gt-button btn-sm">Default Grow</Button>
                                            : <Button className="btn-warning gt-button btn-sm" onClick={event => {
                                                event.preventDefault()
                                                setDefaultGrow(grow._id)
                                                    .then(response => console.log(response))
                                                    .catch(err => console.log(err))

                                            }}>Make Default</Button>
                                        }
                                    </div>
                                </Col>
                            </Row>
                            <Row >
                                <Col className="boxBottom my-auto d-block">
                                    <Figure className="mx-auto d-block">
                                    {grow.coverImage ? 
                                        <Figure.Image
                                            className="mx-auto d-block img-fluid"
                                            width={152}
                                            height={152}
                                            alt="171x180"
                                            src={`https://project-three-logger-photos.s3.amazonaws.com/${grow.coverImage}`}
                                        />
                                        :
                                        <Figure.Image
                                        width={152}
                                        height={152}
                                        alt="171x180"
                                        src="./leaf.png"
                                        />
                                    }
                                        {/* <Figure.Caption>
                                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </Figure.Caption> */}
                                    </Figure>
                                </Col>
                                <Col className="boxBottom" md={8}>
                                    <ListGroup>
                                        <ListGroup.Item className="text-capitalize"><strong>Strain Name:</strong> {grow.strainName}</ListGroup.Item>
                                        <ListGroup.Item className="text-capitalize"><strong>Breeder:</strong> {grow.breeder}</ListGroup.Item>
                                        <ListGroup.Item className="text-capitalize"><strong>Start Date:</strong> {grow.dateStarted
                                            ? Moment(grow.dateStarted.slice(0, 10)).format("MM-DD-YYYY")
                                            : "Not Started"} </ListGroup.Item>
                                        <ListGroup.Item className="text-capitalize"><strong>Date Completed:</strong> {!grow.dateCompleted && !grow.dateStarted
                                            ? ''
                                            : grow.dateCompleted
                                                ? Moment(grow.dateCompleted.slice(0, 10)).format("MM-DD-YYYY")
                                                : "In Progress"} </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                ))}
            </Container>
    )

}
