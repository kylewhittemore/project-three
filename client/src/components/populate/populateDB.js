import React from 'react'
import data from './sampleData'
import Axios from 'axios';
import grow from './sampleGrow'

const Populate = () => {

const id = '5d61df115895df849a4db0db'

async function postToDB(element, id) {
    let response = await Axios.post(`/api/daily/${id}`, element)
    return response
}

async function postGrowToDB(element) {
    let response = await  Axios.post('/api/grow/5d61dd4798302b83f253e061', element)
    return response.data
}

// postGrowToDB(grow).then(response => console.log(response))

data.forEach(element => {
    let data = element
    data.grow = id
    postToDB(data, id)
    .then(response => console.log(response))
    .catch(err => console.log(err))
})

return (
    <p>db populated</p>
)

}

export default Populate