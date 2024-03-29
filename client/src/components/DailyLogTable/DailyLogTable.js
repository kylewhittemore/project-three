import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import Axios from 'axios'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import fmt from '../../utils/formatTime'


export default function DailyLogTable(props) {

    const styles = {
        icon: {
            cursor: "pointer"
        },
        placeholder: {
            visibility: "hidden"
        }
    }

    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchLogs() {
            setLoading(true);

            let response = await Axios.get(`/api/daily/grow/${props.growId}`)
            console.log("logs", response)
            let data = response.data
            return data;
        }
        fetchLogs().then(data => {
            setLogs(data)
            setLoading(false)
        })
            .catch(err => setLoading(false))
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

    function formatDateShort(date) {
        return fmt.shortFmt(date)
    }

    function TableHead() {
        return (
            <thead>
                <tr>
                    <th style={{width: "15%"}} className="text-center">Date</th>
                    <th style={{width: "70%"}} className="text-center">Notes</th>
                    <th style={{width: "15%"}} className="text-center">Options</th>
                </tr>
            </thead>
        )
    }

    function TableBody() {
        return (

            <tbody>
                {logs.map(log => {
                    return (
                        <tr key={log._id}>

                            <td className="text-center">{formatDateShort(log.date)}</td>
                            <td>{log.notes.length > 70 ? log.notes.slice(0, 70) + "..." : log.notes}</td>
                            <td className="text-center">
                                <i style={styles.icon} className="px-4 py-2 fas fa-eye" onClick={event => {
                                    event.preventDefault()
                                    props.history.push(`/dailylog/?log_id=${log._id}`)
                                }}
                                ></i>
                                <i style={styles.icon} className="px-4 py-2 far fa-trash-alt" onClick={event => {
                                    event.preventDefault()
                                    deleteLog(log._id).then(getLogs)
                                }}
                                ></i>
                            </td>
                        </tr>
                    )
                })}
            </tbody>

        )
    }

    return (
        loading ?
            <LoadingSpinner />
            :
        <Container>
            <Table striped bordered hover size="sm" responsive>
                <TableHead/>
                <TableBody />
            </Table>
        </Container>

    )

}
