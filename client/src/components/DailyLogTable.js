import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Axios from 'axios'
import LoadingSpinner from './LoadingSpinner'


export default function DailyLogTable(props) {

    const styles = {
        icon: {
            cursor: "pointer"
        }
    }

    // This is a functional, stateful component.  
    // It is using the 'useState' hook to avoid requiring a class-based component
    // The relevant states for this component are logs and loading.  The logs are fetched 
    // on component render useing the useEffect hook.  Loading is used to toggle the 
    // LoadingSpinner display.

    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        async function fetchLogs() {
            setLoading(true);
            let response = await Axios.get('/api/daily');
            let data = response.data
            return data;
        }
        fetchLogs().then(data => {
            setLogs(data)
            setLoading(false)
        }).catch(err => setLoading(false))
    }, []);

    async function getLogs() {
        let response = await Axios.get('/api/daily')
        setLogs(response.data)
    }

    async function deleteLog(id) {
        let response = await Axios({
            method: 'delete',
            url: `/api/daily/${id}`
        })
        return response
    }

    async function getNotes(id) {
        let response = await Axios.get(`/api/daily/${id}`)
        // console.log(response)
        return response.data.notes
    }

    async function updateLog(id) {

        const log = {
            date: "05/21/18",
            didFeed: false,
            didTransplant: false,
            didWater: true,
            notes: "put note",
            plantAppearance: "mellow"
        }

        let response = await Axios({
            method: 'put',
            url: `/api/daily/${id}`,
            data: log
        })
        console.log(response)
    }

    function TableHead() {
        return (
            <thead>
                <tr>
                    <th>Daily Log ID</th>
                    <th>Date</th>
                    <th>Grow</th>
                    <th>Notes</th>
                </tr>
            </thead>
        )
    }

    function TableBody() {
        return (
            <tbody>
                {/* after implementing filters "logs.map....""  will be "filteredLogs.map..." */}
                {logs.map(log => (
                    <tr key={log._id}>
                        <td>{log.logId}</td>
                        <td>{log.date}</td>
                        <td>season name</td>
                        <td>
                            <i style={styles.icon} className="p-1 far fa-sticky-note" onClick={event => {
                                event.preventDefault()
                                getNotes(log._id).then(notes => console.log(notes))

                            }}
                            ></i>
                            <i style={styles.icon} className="p-1 far fa-edit" onClick={event => {
                                event.preventDefault()
                                updateLog(log._id).then(getLogs)
                            }}
                            ></i>
                            <i style={styles.icon} className="p-1 far fa-trash-alt" onClick={event => {
                                event.preventDefault()
                                deleteLog(log._id).then(getLogs)
                            }}
                            ></i>
                        </td>
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
