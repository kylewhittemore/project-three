import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import Axios from 'axios'

import fmt from '../../utils/formatTime'

export default function DashboardChart(props) {

    // The structure of the data is an array of objects
    const initialState = [
        {hiTemp: 80, loTemp:75, hiHum:60, loHum:57, lightOn: 12, date: '08/21/19'},
        {hiTemp: 81, loTemp:75, hiHum:61, loHum:56, lightOn: 12, date: '08/22/19'},
        {hiTemp: 82, loTemp:75, hiHum:61, loHum:58, lightOn: 12, date: '08/23/19'},
        {hiTemp: 80, loTemp:75, hiHum:61, loHum:58, lightOn: 12, date: '08/24/19'},
        {hiTemp: 79, loTemp:70, hiHum:62, loHum:59, lightOn: 12, date: '08/25/19'},
        {hiTemp: 78, loTemp:69, hiHum:63, loHum:58, lightOn: 12, date: '08/26/19'},
        {hiTemp: 77, loTemp:67, hiHum:64, loHum:57, lightOn: 12, date: '08/27/19'}
    ]
    const [environ, setEnviron] = useState(initialState)

    const [hiTemp, setHiTemp] = useState([80, 81, 82, 80, 79, 78, 77])

    const [grow, setGrow] = useState({})

    const [tempChartData, setTempChartData] = useState({
        labels: ['08/21','08/22','08/23','08/24','08/25','08/26','08/27'],
        datasets:[
            {
                label:'Hi Temps',
            data: [80, 81, 82, 80, 79, 78, 77]
        },{
            label:'Lo Temps',
            data: [75,75,75,75,70,69,67]
          }
        ]
      })

    const [humChartData, setHumChartData] = useState({
        labels: ['08/21','08/22','08/23','08/24','08/25','08/26','08/27'],
        datasets:[
          {
            label:'Hi Humidity',
            data: [60,61,61,61,62,63,64]
          },{
            label:'Lo Humidity',
            data: [57,56,58,59,58,57,57]
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


    return (
        <div>
            <Line
                data={ tempChartData }
                 
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