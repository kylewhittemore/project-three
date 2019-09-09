import React, { useState, useEffect } from 'react';
import { Scatter } from 'react-chartjs-2'
import Axios from 'axios';
// import { Alert, Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import fmt from '../../utils/formatTime'
import { set } from 'mongoose';

// import moment from 'moment'
// const t = require('../../utils/formatTime')

export default function Dashboard(props) {


    const [grow, setGrow] = useState({})
    const [growId, setGrowId] = useState({})
    const [allDates, setAllDates] = useState([])
    const [events, setEvents] = useState([])
    // const [dataPoints, setDataPoints] = useState([hardcodeDataPoints])
    const [chartData, setChartData] = useState({})

    const eventList = ['Flip', 'Flush', 'Transplant', 'Defoliate', 'Feed', 'Water']

    useEffect(() => {

        let tempAllDates, tempArray = []

        async function fetchGrow(growId) {
            let response = await Axios.get(`/api/grow/${growId}`)
            if (props.growId) {
                setGrow(response)
                setGrowId(response._id)
            }
            return response
        }

        var mapDataPoint = function (date, event) {
            return {
                x: tempAllDates.indexOf(date),
                y: eventList.indexOf(event)
            }
        }

        async function fetchUserData() {
            let data = await Axios.get(`/api/user/profile`)
            let user = data.data.user
            // return user
            let response = await fetchGrow(user.defaultGrow)
            setGrow(response.data)
            setGrowId(response.data._id)
            // console.log("USER DATA", response.data)

            setEvents(eventList)

            tempAllDates = response.data.dailyLogs.map(log => log.date).reverse()
            setAllDates(tempAllDates)
            console.log("ALL DATES: ", tempAllDates)

            let tempDataPoints = []

            tempArray = response.data.dailyLogs.filter(log => log.didWater)
            tempArray.forEach(log => tempDataPoints.push(mapDataPoint(log.date, 'Water')))
            tempArray = response.data.dailyLogs.filter(log => log.didFeed)
            tempArray.forEach(log => tempDataPoints.push(mapDataPoint(log.date, 'Feed')))
            tempArray = response.data.dailyLogs.filter(log => log.didFlip)
            tempArray.forEach(log => tempDataPoints.push(mapDataPoint(log.date, 'Flip')))
            tempArray = response.data.dailyLogs.filter(log => log.didDefoliate)
            tempArray.forEach(log => tempDataPoints.push(mapDataPoint(log.date, 'Defoliate')))
            tempArray = response.data.dailyLogs.filter(log => log.didFlush)
            tempArray.forEach(log => tempDataPoints.push(mapDataPoint(log.date, 'Flush')))
            tempArray = response.data.dailyLogs.filter(log => log.didTransplant)
            tempArray.forEach(log => tempDataPoints.push(mapDataPoint(log.date, 'Transplant')))
            // setDataPoints(tempDataPoints)
            console.log(JSON.stringify(tempDataPoints))
            setChartData({
                datasets: [{
                    data: tempDataPoints, // Specify the data values array
                    borderColor: '#2196f3', // Add custom color border            
                    backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
                }]
            })

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


    // function buildChart() {

    //     const chartData = {
    //     datasets: [{
    //             label: 'Population', // Name the series
    //             data: hardcodeDataPoints, // Specify the data values array
    //             borderColor: '#2196f3', // Add custom color border            
    //             backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
    //         }]

    //     }
    //     return chartData
    // }


    function xTick(date) {
        return allDates ? fmt.shortFmt(allDates[date]) : ""
    }

    function yTick(event) {
        return events ? events[event] : ""
    }


    return (

        <Container className="timelineContainer mx-auto">

            <Scatter
                data={chartData}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Event Timeline',
                        fontSize: 20,
                        padding: 30,
                        fontColor: "#000000"
                    },
                    scales: {
                        xAxes: [{
                            type: 'linear',
                            position: 'bottom',
                            scaleLabel: {
                                display: true,
                                // labelString: 'Date',
                                fontColor: "black",
                                fontSize: 18
                            },
                            ticks: {
                                min: 0,
                                max: { allDates }.length,
                                callback: function (value) {
                                    return xTick(value)
                                },
                                fontColor: "black"
                            }
                        }],
                        yAxes: [{
                            type: 'linear',
                            // scaleLabel: {
                            //     display: true,
                            //     labelString: 'Events',
                            //     fontColor: "black",
                            //     fontSize: 18
                            // },
                            ticks: {
                                min: 0,
                                max: 5,
                                callback: function (value) {
                                    return yTick(value);
                                },
                                fontColor: "black"
                            },
                        }]
                        // tooltips: {
                        //     callbacks: {
                        //        title: function(dates, date) {
                        //           return d.labels[t[0].index];
                        //        }
                        //     }
                        //  }
                    }
                }}
            />

        </Container>
    )
}