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
            console.log(response.data)
            
            // consider using a ternary in the .mao fn's below
            setDateLogged(response.data.dailyLogs.map(({date})=>t.shortFmt(date)))
            setHiTemp(response.data.dailyLogs.map(({temp})=>temp.hi))
            setLoTemp(response.data.dailyLogs.map(({temp})=>temp.lo))
            setHiHumidity(response.data.dailyLogs.map(({humidity})=>humidity.hi))
            setLoHumidity(response.data.dailyLogs.map(({humidity})=>humidity.lo))
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


    function buildTempChart () {
        const tempChartData = {
            labels: dateLogged ? dateLogged : null,
            datasets:[
                {
                    label:'Hi Temps',
                    data: hiTemp ? hiTemp : null,
                    borderColor: "#2930EB", 
                    pointRadius: 2,
                    fill: false
                },{
                    label:'Lo Temps',
                    data: loTemp ? loTemp : null,
                    borderColor: "#B40EFF",
                    pointRadius: 2,
                    fill: false
                    },
                    {
                    label:'Hi Humidity',
                    data: hiHumidity ? hiHumidity : null,
                    borderColor: "#FF581F",
                    pointRadius: 1.5,
                    fill: false
                },{
                    label:'Lo Humidity',
                    data: loHumidity ? loHumidity : null,
                    borderColor: "#FF7D13",
                    pointRadius: 1.5,
                    fill: false
                }
            ],
        }
        return tempChartData
    }

    
    return (
        <div>
            <Line
                data={ buildTempChart }
                // height="auto"
                // width={300}
                options={{
                    title:{
                        display:true,
                        text:'Tempurature & Humidity',
                        fontSize:25
                    },
                    maintainAspectRatio: true,
                    responsive: true

                }}
            />
        </div>

    )

}