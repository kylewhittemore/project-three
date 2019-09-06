import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import Axios from 'axios'
import seedData from '../populate/sampleEnvData'

import fmt from '../../utils/formatTime'

export default function DashboardChart(props) {

    // The structure of the data is an array of objects
    const initialState = [ seedData ]
    
    const [environ, setEnviron] = useState(initialState)

    // var hiTemp, loTemp, hiHumidity, loHumidity = []
    const [dateLogged, setDateLogged] = useState([])
    const [hiTemp, setHiTemp] = useState([])
    const [loTemp, setloTemp] = useState([])
    const [hiHumidity, setHiHumidity] = useState([])
    const [loHumidity, setloHumidity] = useState([])
    // const [dateLogged, setDateLogged] = useState(["4/5/2019", "4/6/2019", "4/7/2019", "4/8/2019", "4/10/2019", "4/11/2019", "4/12/2019", "4/15/2019", "4/18/2019", "4/19/2019", "4/21/2019", "4/25/2019", "4/27/2019", "4/29/2019", "5/2/2019", "5/6/2019", "5/8/2019", "5/11/2019", "5/12/2019", "5/15/2019", "5/17/2019", "5/19/2019", "5/23/2019", "5/26/2019", "5/27/2019", "5/28/2019", "5/30/2019", "6/1/2019", "6/3/2019", "6/4/2019", "6/7/2019", "6/8/2019", "6/10/2019", "6/12/2019", "6/14/2019", "6/17/2019", "6/18/2019", "6/19/2019", "6/21/2019", "6/24/2019"])
    // const [hiTemp, setHiTemp] = useState([78, 76, 74, 77, 79, 78, 78, 72, 71, 75, 76, 76, 78, 81, 78, 77, 76, 76, 75, 74, 73, 73, 76, 77, 78, 79, 79, 75, 74, 75, 75, 76, 77, 72, 72, 71, 73, 74, 75, 75])
    // const [loTemp, setloTemp] = useState([67, 68, 69, 63, 64, 64, 65, 65, 66, 66, 67, 67, 61, 63, 64, 68, 68, 67, 67, 66, 65, 65, 65, 66, 67, 65, 64, 64, 63, 63, 64, 65, 65, 65, 66, 67, 67, 66, 67, 65])
    // const [hiHumidity, setHiHumidity] = useState([64, 64, 68, 69, 70, 70, 69, 64, 62, 64, 60, 61, 61, 61, 62, 63, 64, 64, 65, 65, 66, 68, 68, 68, 68, 67, 67, 64, 64, 64, 61, 62, 61, 62, 59, 59, 61, 62, 63, 64])
    // const [loHumidity, setloHumidity] = useState([58, 57, 56, 55, 55, 55, 55, 56, 56, 57, 58, 58, 50, 49, 48, 48, 49, 50, 51, 52, 54, 54, 54, 55, 55, 56, 57, 59, 53, 53, 55, 53, 53, 52, 54, 56, 51, 51, 52, 53])

    const [grow, setGrow] = useState({})

    

    const [humChartData, setHumChartData] = useState({
        labels: ["4/5/2019", "4/6/2019", "4/7/2019", "4/8/2019", "4/10/2019", "4/11/2019", "4/12/2019", "4/15/2019", "4/18/2019", "4/19/2019", "4/21/2019", "4/25/2019", "4/27/2019", "4/29/2019", "5/2/2019", "5/6/2019", "5/8/2019", "5/11/2019", "5/12/2019", "5/15/2019", "5/17/2019", "5/19/2019", "5/23/2019", "5/26/2019", "5/27/2019", "5/28/2019", "5/30/2019", "6/1/2019", "6/3/2019", "6/4/2019", "6/7/2019", "6/8/2019", "6/10/2019", "6/12/2019", "6/14/2019", "6/17/2019", "6/18/2019", "6/19/2019", "6/21/2019", "6/24/2019"],
        datasets:[
          {
            label:'Hi Humidity',
            data: [64, 64, 68, 69, 70, 70, 69, 64, 62, 64, 60, 61, 61, 61, 62, 63, 64, 64, 65, 65, 66, 68, 68, 68, 68, 67, 67, 64, 64, 64, 61, 62, 61, 62, 59, 59, 61, 62, 63, 64]
          },{
            label:'Lo Humidity',
            data: [58, 57, 56, 55, 55, 55, 55, 56, 56, 57, 58, 58, 50, 49, 48, 48, 49, 50, 51, 52, 54, 54, 54, 55, 55, 56, 57, 59, 53, 53, 55, 53, 53, 52, 54, 56, 51, 51, 52, 53]
        }
        
    ]
})

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
            // return user
            let response = await fetchGrow(user.defaultGrow)
            setGrow(response.data)
            // console.log(response.data)
            //++++++++++++
            // const logs = response.data.dailyLogs
            console.log("fetchGrow RESPONSE: ", response.data.dailyLogs.length, " objects")
            console.log("ENVIRON: ", environ.length, " objects")
            // setDateLogged = seedData.map(({date})=>date)
            // console.log("DATES: ", dateLogged)
            // hiTemp = seedData.map(({temp})=>temp.hi)
            // console.log("HI TEMPS: ", hiTemp)
            // loTemp = seedData.map(({temp})=>temp.lo)
            // console.log("LO TEMPS: ", loTemp)
            // hiHumidity = seedData.map(({humidity})=>humidity.hi)
            // console.log("HI HUMIDITY: ", hiHumidity)
            // loHumidity = seedData.map(({humidity})=>humidity.lo)
            // console.log("LO HUMIDITY: ", loHumidity)
            // actual reading thru the array and creating the environ object goes here
            // setHiTemp(initialState.map)
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

// ************************************ Functions

    function buildTempChart () {
        const tempChartData = {
            labels: dateLogged,
            datasets:[
                {
                label:'Hi Temps',
                data: hiTemp,
                backgroundColor:['rgba(255, 99, 132, 0.6)']
            },{
                label:'Lo Temps',
                data: loTemp,
                backgroundColor:['rgba(54, 162, 235, 0.6)']
                }
            ]
        }
        return tempChartData
    }

    function buildTempChart2 () {
        const tempChartData = {
            labels: dateLogged,
            datasets:[
                {
                    label:'Hi Temps',
                    data: hiTemp,
                    borderColor: "#8e5ea2",
                    fill: false
                },{
                    label:'Lo Temps',
                    data: loTemp,
                    borderColor: "#3e95cd",
                    borderWidth: 5,
                    fill: false
                    }
            ]
        }
        return tempChartData
    }

    function buildTempChart3 () {
        const tempChartData = {
            labels: dateLogged,
            datasets:[
                {
                    label:'Hi Temps',
                    data: hiTemp,
                    borderColor: "#2930EB",
                    pointRadius: 0,
                    fill: false
                },{
                    label:'Lo Temps',
                    data: loTemp,
                    borderColor: "#B40EFF",
                    pointRadius: 1,
                    fill: false
                    },
                    {
                    label:'Hi Humidity',
                    data: hiHumidity,
                    borderColor: "#FF581F",
                    pointRadius: 2,
                    fill: false
                },{
                    label:'Lo Temps',
                    data: loHumidity,
                    borderColor: "#FF7D13",
                    fill: false
                }
            ]
        }
        return tempChartData
    }


    return (
        <div>
            <Line
                data={ buildTempChart }
                options={{
                    title:{
                        display:true,
                        text:'Tempurature',
                        fontSize:25
                }
            }}
            />
            <Line
                data={ buildTempChart2 }
                options={{
                    title:{
                        display:true,
                        text:'Tempurature',
                        fontSize:25
                    }
                }}
            />
            <Line
                data={ buildTempChart3 }
                options={{
                    title:{
                        display:true,
                        text:'Tempurature & Humidity',
                        fontSize:25
                    }
                }}
            />
            <Line
                data={{ 
                    labels: dateLogged,
                    datasets: [
                        {
                            label:'Hi Temps',
                            data: hiTemp
                        },{
                            label:'Lo Temps',
                            data: loTemp
                        }
                    ]
                }}
                options={{
                    title:{
                        display:true,
                        text:'Tempurature',
                        fontSize:25
                    }
                }}
            />
            <Line
                data={ humChartData }
                options={{
                    title:{
                        display:true,
                        text:'Humidity',
                        fontSize:25
                    }
                   
                }}
            />
        
        </div>

    )

}