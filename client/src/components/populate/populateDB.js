import React from 'react'
import Axios from 'axios';
// import environ from './sampleEnvData'

const Populate = () => {


    
const growId = '5d71cb3efed91156e43e2098'
const userId = '5d71c74bb1a8b04f6c6a3dc6'

async function postLogToDB(element, growId) {
    let response = await Axios.post(`/api/daily/${growId}`, element)
    return response
}

async function postGrowToDB(element, userId) {
    let response = await  Axios.post(`/api/grow/${userId}`, element)
    return response.data
}

async function putEnvToLog(element) {
    let date = element.date
    let dailyLog = await Axios.post('/api/environ/', date)
    let response = await Axios.put(`/api/grow/${dailyLog}`, element)
    return response.data
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LOAD A GROW (SEASON)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import grow from './sampleGrow'
// postGrowToDB(grow, userId).then(response => console.log(response))
//
// +++ END

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LOAD DAILY LOGS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import data from './sampleData-jj'
data.forEach(element => {
    let data = element
    data.grow = growId
    postLogToDB(data, growId)
    .then(response => {
        console.log(response)
    })
    .catch(err => console.log(err))
})
//
// +++ END

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LOAD DAILY LOGS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import data from './sampleEnvDataj'
data.forEach(element => {
    putEnvToLog(element) 
    .then(response => {
        console.log(response)
    })
    .catch(err => console.log(err))
})

return (
    <p>db populated</p>
)

}

export default Populate