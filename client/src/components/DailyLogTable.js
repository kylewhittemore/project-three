import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Axios from 'axios'


export default function DailyLogTable(props) {

    const logData = [
        {
            _id: 1234567,
            logId: 123456,
            date: "12/12/2012",
        },
        {
            _id: 1234561,
            logId: 123456,
            date: "12/12/2012",
        },
        {
            _id: 1234562,
            logId: 123456,
            date: "12/12/2012",
        },
        {
            _id: 1234563,
            logId: 123456,
            date: "12/12/2012",
        },
        {
            _id: 1234564,
            logId: 123456,
            date: "12/12/2012",
        },
        {
            _id: 1234565,
            logId: 123456,
            date: "12/12/2012",
        },
        {
            _id: 1234566,
            logId: 123456,
            date: "12/12/2012",
        }
    ]

    const [logs, setLogs] = useState(logData)

    useEffect(() => {
        async function fetchLogs() {
        //   setLoading(true);
          let response = await Axios.get('/api/daily');
          let data = response.data
          return data;
        }
        fetchLogs().then(data => {
          setLogs(data)
        //   setLoading(false)
        }).catch(err => console.log(err))
        // }).catch(err => setLoading(false))
      }, []);

    function TableHead() {
        
        return (
            <thead>
                <tr>
                    {/* My thought here is that the text in each cell will be a link. 
                        click on the log ID to go to the log, the date to see all logs from that date
                        the grow to see all logs from that grow.  For Example:

                        12345   6/19/19    Strain Name Grow #7      notes icon
                        
                        clicking on any link in the table then acts as a filter for the view
                        There shopuld also be filters in the navbar for date-range & grow
                        if there are notes there will be a note icon, hover over the note icon to tool tip 
                        a note*/}
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
                {logs.map(log => (
                    <tr key={log._id}>
                        <td>{log.logId}</td>
                        <td>{log.date}</td>
                        <td>log.grow</td>
                        <td>notes</td>
                    </tr>
                ))}
            </tbody>
        )
    }

    return (
        <Table>
            <TableHead />
            <TableBody />
        </Table>
    )

}
