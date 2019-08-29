import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Axios from 'axios'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

export default function GrowTable(props) {
    const userId = localStorage.getItem('p3aajjkw-id')
    // const styles = {
    //     icon: {
    //         cursor: "pointer"
    //     },
    //     placeholder: {
    //         visibility: "hidden"
    //     }
    // }

    const [grows, setGrows] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchGrows() {
            setLoading(true);
            let response = await Axios.get(`/api/grow/user/${userId}`);
            let data = response.data
            console.log(data)
            return data;
        }
        fetchGrows().then(data => {
            setGrows(data)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }, [userId]);

    // async function getGrows() {
    //     let response = await Axios.get('/api/grow')
    //     setGrows(response.data)
    // }

    // async function deleteGrow(id) {
    //     let response = await Axios({
    //         method: 'delete',
    //         url: `/api/grow/${id}`
    //     })
    //     return response
    //     //needs logic to delete all associated logs
    // }

    function TableHead() {
        return (
            <thead>
                <tr>
                    <th>Season Name</th>
                    <th>Strain Name</th>
                    <th>Data Started</th>
                    <th>Date Completed</th>
                </tr>
            </thead>
        )
    }

    function TableBody() {
        return (
            <tbody>
                {grows.map(grow => (
                    <tr key={grow._id}>
                        <td>{grow.seasonName}</td>
                        <td>{grow.strainName}</td>
                        <td>{grow.dateStarted ? grow.dateStarted.slice(0, 10) : "Not Started"}</td>
                        <td>{!grow.dateCompleted && !grow.dateStarted ? '' : grow.dateCompleted ? grow.dateCompleted.slice(0, 10) : "In Progress"}</td>
                    </tr>
                ))}
            </tbody>
        )
    }

    // If the logs are loading display a spinner, otherwise render the table from state
    return (
        loading ?
            <LoadingSpinner />
            :
            <Table>
                <TableHead />
                <TableBody />
            </Table>
    )

}
