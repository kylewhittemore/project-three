import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import Axios from 'axios'

import t from '../../utils/formatTime'

export default function DashboardChart(props) {

    // The structure of the data is an array of objects
    
    // const [environ, setEnviron] = useState()

    // var hiTemp, loTemp, hiHumidity, loHumidity = []
    const [dateLogged, setDateLogged] = useState([])
    const [hiTemp, setHiTemp] = useState([])
    const [loTemp, setLoTemp] = useState([])
    const [hiHumidity, setHiHumidity] = useState([])
    const [loHumidity, setLoHumidity] = useState([])

    const [grow, setGrow] = useState({})

useEffect (() => {
    
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
            let response = await fetchGrow(user.defaultGrow)
            setGrow(response.data)
            // console.log(response.data)
            
            // consider using a ternary in the .mao fn's below
            setDateLogged(response.data.dailyLogs.map(({date})=>t.shortFmt(date)).reverse())
            setHiTemp(response.data.dailyLogs.map(({temp})=>temp.hi).reverse())
            setLoTemp(response.data.dailyLogs.map(({temp})=>temp.lo).reverse())
            setHiHumidity(response.data.dailyLogs.map(({humidity})=>humidity.hi).reverse())
            setLoHumidity(response.data.dailyLogs.map(({humidity})=>humidity.lo).reverse())
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


    function buildChart () {
        const chartData = {
            labels: dateLogged ? dateLogged : null,
            datasets:[
                {
                    label:'High Temps',
                    data: hiTemp ? hiTemp : null,
                    borderColor: "#ff0000",
                    backgroundColor: "#ff0000",
                    pointRadius: 2,
                    fill: false
                },{
                    label:'Low Temps',
                    data: loTemp ? loTemp : null,
                    borderColor: "#00a6ff",
                    backgroundColor: "#00a6ff",
                    pointRadius: 2,
                    fill: false
                    },
                    {
                    label:'High Humidity',
                    data: hiHumidity ? hiHumidity : null,
                    borderColor: "#b50000",
                    backgroundColor: "#b50000", 
                    pointRadius: 1.5,
                    fill: false
                },{
                    label:'Low Humidity',
                    data: loHumidity ? loHumidity : null,
                    borderColor: "#0058b5",
                    backgroundColor: "#0058b5",
                    
                    pointRadius: 1.5,
                    fill: false
                }
            ],
        }
        return chartData
    }

    
    return (
        <div>
            <Line
                data={ buildChart }
                // height="auto"
                // width={300}
                options={{
                    title:{
                        display:true,
                        text:'Tempurature & Humidity',
                        fontSize:20,
                        fontColor: "#000000"
                    },
                    legend: {
                        display: true,
                        labels: {
                            fontColor: "black",
                            
                        }
                    },
                    maintainAspectRatio: true,
                    responsive: true

                }}
            />
        </div>

    )

}