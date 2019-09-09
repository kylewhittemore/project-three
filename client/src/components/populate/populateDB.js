import React from 'react'
import Axios from 'axios';

import grow from './sampleGrow'
import data from './sampleData'
import envdata from './sampleEnvData'
import envdata2 from './sampleEnvData2'
// const fs = require('fs');
// const path = require('path');

// var savePath = path.join(__dirname, './sampleDataPlus.js');

const Populate = () => {



        
    const growId = '5d75cafb0758bf621c0b0bc0'  //Menthol Grow
    const userId = '5d75c8adf3b5077548482596'  //demo123

    async function postLogToDB(element, growId) {
        let response = await Axios.post(`/api/daily/${growId}`, element)
        return response
    }

    async function postGrowToDB(element, userId) {
        let response = await  Axios.post(`/api/grow/${userId}`, element)
        return response.data
    }

    async function putEnvToLog(element) {
        let response = await Axios.post('/api/environ/', element)
        return response.data
    }
    function joinFiles() {
        let joinedData = []
        data.forEach((log, index) => {
            joinedData.push(Object.assign({}, log, envdata[index]));
        })
        return joinedData
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
    // data.forEach((element, index) => {
    //     let data = element
    //     data.grow = growId
    //     setTimeout(() => {
    //         postLogToDB(data, growId)
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(err => console.log(err))
    //     }, 250*index)
    // })
    //
    // +++ END

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // LOAD DAILY LOGS FROM JOINED FILES 
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const joinedData = joinFiles()
    console.log(joinedData)
    joinedData.forEach((element, index) => {
        let data = element
        data.grow = growId
        setTimeout(() => {
            postLogToDB(data, growId)
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err))
        }, 250*index)
    })
    //
    // +++ END


    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // LOAD ENVIRONMENTAL DATA ***>>> requires dailyLog for DATE exists
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // setTimeout(() => {

    //     envdata.forEach((element, index) => {
    //         setTimeout(() => {
    //             putEnvToLog(element) 
    //             .then(response => {
    //                     console.log(response.temp, response.humidity)
    //             })
    //             .catch(err => console.log(err))
    //         }, 500*index)
    //     })
    // },30000)
    //
    // +++ END

    return (
        <p>db populated</p>
    )


}

export default Populate