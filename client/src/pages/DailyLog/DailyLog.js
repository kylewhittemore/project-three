import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyLogForm from '../../components/DailyLogForm/DailyLogForm'
import LeftSliderBar from "../../components/LeftSliderBar/LeftSliderBar";
import { Redirect } from 'react-router-dom'

function DailyLogPage(props) {

    const userId = localStorage.getItem('p3aajjkw-id')

    if (!userId) {
        return (
            <Redirect to={'/'} />
        )
    }

    let logId, growId

    let url = window.location.href

    if (url.indexOf("?log_id=") !== -1) {
        logId = url.split("=")[1]
    }
    else if (url.indexOf("?grow_id=") !== -1) {
        growId = url.split("=")[1]
    }

    return (
        <>
            <LeftSliderBar {...props} />
            <div className="align-me">
                <DailyLogForm {...props}
                    // growId={growId}
                    logId={logId}
                    userId={userId}
                />
            </div>
        </>
    );
};

export default DailyLogPage;