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
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchGrows() {
            setLoading(true);
            let response = await Axios.get(`/api/grow/user/${userId}`);
            let data = response.data
            console.log(JSON.stringify(data))
            setLoading(false)
            return data;
        }
        async function fetchUser() {
            setLoading(true);
            let response = await Axios.get(`/api/user/profile`);
            let data = response.data
            console.log("USER: " + JSON.stringify(data))
            setLoading(false)
            return data;
        }
        fetchGrows().then(data => {
            setGrows(data)
        }).catch(err => {
            console.log(err)
        })
        fetchUser().then(user => {
            setUser(user.user)
        }).catch(err => {
            console.log(err)
        })
    }, [userId]);

    async function setDefaultGrow(growId) {
        // const body = 
        let user = await Axios.put(`/api/user/setDefaultGrow/${userId}`, { defaultGrow: growId })
        console.log("default grow", user)
        setUser(user.data)
        return user.data
    }


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
                                    <Button onClick={event => {
                                        event.preventDefault()
                                        // updateLog(log._id).then(getLogs)
                                        props.history.push(`/staticheader/?grow_id=${grow._id}`)
                                    }}>Details</Button>
                                    <Button onClick={event => {
                                        event.preventDefault()
                                        // updateLog(log._id).then(getLogs)
                                        props.history.push(`/newseason/?grow_id=${grow._id}`)
                                    }}>Edit</Button>
                                    {(user.defaultGrow === grow._id)
                                        ? <Button className="btn-success">IS DEFAULT</Button>
                                        : <Button className="btn-warning" onClick={event => {
                                            event.preventDefault()
                                            //                                             const data = { defaultGrow: grow._id.toString() }
                                            //                                             console.log("set default" + JSON.stringify(data))
                                            //                                             Axios.put(`/api/user/setDefaultGrow/${userId}`, data)
                                            //                                                 .then(res => {
                                            //                                                     console.log("Successful") 
                                            // ///  Getting Error Here ------------------------------------------------------------------------
                                            //                                                     // res.body is undefined for some reason
                                            //                                                     console.log(JSON.stringify(res.body)) 
                                            //                                                     // setUser(res.body) .... so setUser doesn't work, there fore page does not refresh
                                            //                                                 })
                                            //                                                 .catch(err => console.log(`setDefaultGrow failed! Error = ${err}`))
                                            setDefaultGrow(grow._id)
                                                .then(response => console.log(response))
                                                .catch(err => console.lo(err))

                                        }}>Make Default</Button>
                                    }
                                    {/* <Button value={grow._id}>Make Default</Button> */}
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
