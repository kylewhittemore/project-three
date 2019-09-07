import React from 'react';
import StaticHeader from '../../components/StaticHeader/StaticHeader';
import DailyLogTable from '../../components/DailyLogTable/DailyLogTable'
import { userInfo } from 'os';

//----------------
//Test page used to test out the edit function on the static header. 
// not sure if this will be something we need moving forward, if not we can delete the file

export default function StaticHeaderPage(props) {

    const userId = localStorage.getItem('p3aajjkw-id')
    console.log(userId)
    let growId;
    let url = window.location.href;

    if (url.indexOf("?grow_id=") !== -1) {
        growId = url.split("=")[1]
        console.log("GROW ID %%%%%%", growId)
    };

    return (
        <>
        <StaticHeader {...props} growId={growId} />
        <DailyLogTable {...props} growId={growId} userId={userId} />
        </>
    )

}