import React from 'react'
import data from './sampleData'
import Axios from 'axios';
import grow from './sampleGrow'

const Populate = () => {

const id = '5d62f6bb42d0239cbc08a6be'

async function postToDB(element, id) {
    let response = await Axios.post(`/api/daily/${id}`, element)
    return response
}

async function postGrowToDB(element) {
    let response = await  Axios.post('/api/grow/5d62f4ef67b1c19c4a06f420', element)
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