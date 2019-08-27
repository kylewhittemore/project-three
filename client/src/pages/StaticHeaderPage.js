import React from 'react';
import StaticHeader from '../components/StaticHeader/StaticHeader';

//----------------
//Test page used to test out the edit function on the static header. 
// not sure if this will be something we need moving forward, if not we can delete the file

export default function StaticHeaderPage(props) {

    let growId;
    let url = window.location.href;

    if (url.indexOf("?grow_id=") !== -1) {
        growId = url.split("=")[1]
        console.log("GROW ID %%%%%%", growId)
    };

    return (
        <StaticHeader {...props} growId={growId} />
    )

}