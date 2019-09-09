import React from 'react'
import Axios from 'axios';

import grow from './sampleGrow'
import data from './sampleData'
import envdata from './sampleEnvData'

const Populate = () => {


    
const growId = '5d71cb3efed91156e43e2098'  //mlab 
const userId = '5d71c74bb1a8b04f6c6a3dc6'  //mlab user: demo123

async function postLogToDB(element, growId) {
    let response = await Axios.post(`/api/daily/${growId}`, element)
    return response
}

async function postGrowToDB(element, userId) {
    let response = await  Axios.post(`/api/grow/${userId}`, element)
    return response.data
}

async function putEnvToLog(element) {
    // let date = element.date
    // let dailyLog = await Axios.post('/api/environ/', {date: element.date})
    // let logId = dailyLog._id
    // console.log('DATE: ', element.date, " || logId: ", logId)
    let response = await Axios.post('/api/environ/', element)
    return response.data
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LOAD A GROW (SEASON)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// postGrowToDB(grow, userId).then(response => console.log(response))
//
// +++ END

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LOAD DAILY LOGS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// data.forEach(element => {
//     let data = element
//     data.grow = growId
//     postLogToDB(data, growId)
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err => console.log(err))
// })
//
// +++ END

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LOAD ENVIRONMENTAL DATA ***>>> requires dailyLog for DATE exists
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
envdata.forEach((element, index) => {
    setTimeout(() => {
        putEnvToLog(element) 
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }, index*250)   // 250 milliseconds
})
//
// +++ END

return (
    <p>db populated</p>
)

}

export default Populate