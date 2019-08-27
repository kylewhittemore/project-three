import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyLogForm from '../../components/DailyLogForm/DailyLogForm'

function DailyLogPage(props) {

    let logId, growId
    
    let url = window.location.href

    if (url.indexOf("?log_id=") !== -1) {
        logId = url.split("=")[1]
    }
    else if (url.indexOf("?grow_id=") !== -1) {
        growId = url.split("=")[1]
    }

    return (
        <div className="align-me">
            <DailyLogForm {...props} 
            // userId={'userId'} 
            // growId={'growId'} 
            // logId={'logId'} />
            userId={'5d630c1ab4e4e29f0dfb5830'} 
            growId={'5d647ec8380712b1997d4caa'} 
            // logId={'5d647ef7916f32b1b280514a'} 
            />
        </div>
    );
};

export default DailyLogPage;