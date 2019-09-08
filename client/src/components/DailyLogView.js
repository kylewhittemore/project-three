import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import Axios from 'axios'
import fmt from '../utils/formatTime'

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
            // setLogId(tmpLogId)
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

    const dateConverter = date => fmt.longFmt(date)

    const EventRender = () => {

        let eventArray = []
        if (log.didWater) { eventArray.push(` - Watered`) }
        if (log.didTransplant) { eventArray.push(` - Transplanted`) }
        if (log.didFeed) { eventArray.push(` - Fed`) }
        if (log.didDefoliate) { eventArray.push(` - Defoliated`) }
        if (log.didFlip) { eventArray.push(` - Flipped`) }
        if (log.didFlush) { eventArray.push(` - Flushed`) }

        let eventArr1, eventArr2

        if (eventArray.length > 3) {
            eventArr1 = eventArray.slice(0, 3)
            eventArr2 = eventArray.slice(3, eventArray.length)
        }

        return (
            eventArray.length > 3 ?
                <>
                    <Col>
                        {eventArr1.map((event, index) => <p key={Date.now + index}><strong>{event}</strong></p>)}
                    </Col>
                    <Col>
                        {eventArr2.map((event, index) => <p key={Date.now + index}><strong>{event}</strong></p>)}
                    </Col>
                </>
                :
                <>
                    <Col>
                        {eventArray.map((event, index) => <p key={Date.now + index}><strong>{event}</strong></p>)}
                    </Col>
                    <Col className="col-md-3">
                        <div></div>
                    </Col>
                </>
        )
    }

    return (
        <Container className="mx-auto">
            <Row>
                <Col className="mx-auto text-center">
                    <h2 className="text-capitalize">{displayObj.grow}</h2>
                    <h4>{dateConverter(log.date)}</h4>
                </Col>
                <Col className="text-right">
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
                        <Figure.Image
                            // width={171}
                            // height={180}
                            alt="171x180"
                            src={`https://project-three-logger-photos.s3.amazonaws.com/${displayObj.s3Id}`}
                        >
                        </Figure.Image>
                        <Figure.Caption>{log.caption}</Figure.Caption>
                    </Figure>
                </Col>
            </Row>
            <Row>
                <EventRender />
            </Row>
            <Row>
                <Col>
                    {log.notes ?
                        <>
                            <h4>Notes:</h4>
                            <p><strong>{log.notes}</strong></p>
                        </>
                        :
                        <></>}
                </Col>
            </Row>
        </Container>
    )

}