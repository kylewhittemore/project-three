import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import Axios from 'axios'
import fmt from '../../utils/formatTime'

export default function DailyLogView(props) {

    const [log, setLog] = useState({})
    const [displayObj, setDisplayObj] = useState({})

    useEffect(() => {
        async function fetchLog(id) {
            let response = await Axios.get(`/api/daily/${id}`);
            let data = response.data
            return data;
        }

        let url = window.location.href

        if (url.indexOf("?log_id=") !== -1) {
            let tmpLogId = url.split("=")[1]
            fetchLog(tmpLogId)
                .then(log => {
                    console.log("DAILY LOG:  ", log)
                    setLog(log)
                    setDisplayObj({
                        s3Id: log.image.s3Id,
                        hiTemp: log.temp.hi,
                        loTemp: log.temp.lo,
                        hiHumidity: log.humidity.hi,
                        loHumidity: log.humidity.lo,
                        grow: log.grow.seasonName
                    })
                })
                .catch(err => console.log(err))
        }

    }, []);

    const dateConverter = date => fmt.longestFmt(date)

    const EventRender = () => {

        let eventArray = []
        if (log.didWater) { eventArray.push(`watered`) }
        if (log.didTransplant) { eventArray.push(`transplanted`) }
        if (log.didFeed) { eventArray.push(`fed`) }
        if (log.didDefoliate) { eventArray.push(`defoliated`) }
        if (log.didFlip) { eventArray.push(`flipped`) }
        if (log.didFlush) { eventArray.push(`flushed`) }

        let eventStatement

        eventArray.forEach((event, index) => {
<<<<<<< HEAD
            if (index === eventArray.length - 1) { eventStatement = `${eventStatement}, and ${event}` }
            else if (index === 0) { eventStatement = event }
=======
            if (index === 0 || eventArray.length === 1) { eventStatement = event }
            else if (index === eventArray.length - 1) { eventStatement = `${eventStatement}, and ${event}` }
>>>>>>> master
            else { eventStatement = `${eventStatement}, ${event}` }
        })

        return (
            <>
<<<<<<< HEAD
                <p className="ml-4"><strong>Events: </strong>{eventStatement}</p>
=======
                {eventStatement ?
                    <p className="ml-4"><strong>Events: </strong>{eventStatement}</p>
                    :
                    <></>
                }
>>>>>>> master
            </>
        )
    }

    return (
        <Container className="mx-auto dailyLogViewContainer">
            <Row>
                <Col md="10" className="mx-auto">
                    <h2 className="text-capitalize">{displayObj.grow}</h2>
                    <h4>{dateConverter(log.date)}</h4>
                </Col>
                <Col md="2" className="text-right">
                    <Button className="text-right btn-info"
                        onClick={event => {
                            event.preventDefault()
                            props.handleEditModeChange(true)
                        }} variant="outline-light" size="sm">Edit</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Figure>
                        {displayObj.s3Id ?
                            <>
                                <Figure.Image
                                    alt=""
                                    src={`https://project-three-logger-photos.s3.amazonaws.com/${displayObj.s3Id}`}
                                    className="img-fluid"
                                >
                                </Figure.Image>
                                <Figure.Caption>{log.caption}</Figure.Caption>
                            </>
                            :
                            <Figure.Image
                                width={152}
                                height={152}
                                alt=""
                                src="./leaf.png"
                            />

                        }
                    </Figure>
                </Col>
            </Row>
            <Row>
                <Col md="4" className="text-center">
                    <p><strong>Plant Appearance</strong></p>
                    <p>{log.plantAppearance}</p>
                </Col>
                <Col md="4" className="text-center">
                    <p><strong>High/Low Temperature</strong></p>
                    <p>{`${displayObj.hiTemp}/${displayObj.loTemp}`}</p>
                </Col>
                <Col md="4" className="text-center">
                    <p><strong>High/Low Humidity</strong></p>
                    <p>{`${displayObj.hiHumidity}/${displayObj.loHumidity}`}</p>
                </Col>
            </Row>
            <Row >
                <Col>
                    <EventRender />
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    {log.notes ?
                        <>
                            <p className="ml-4"><strong>Notes: </strong>{log.notes}</p>
                        </>
                        :
                        <></>}
                </Col>
            </Row>
        </Container>
    )

}