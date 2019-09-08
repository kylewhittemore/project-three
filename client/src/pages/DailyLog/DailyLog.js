import React, { useState, useEffect } from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyLogForm from '../../components/DailyLogForm/DailyLogForm'
import LeftSliderBar from "../../components/LeftSliderBar/LeftSliderBar";
import { Redirect } from 'react-router-dom'
import Axios from 'axios'
import DailyLogView from "../../components/DailyLogView";

function DailyLogPage(props) {

    const [user, setUser] = useState('')
    const [growId, setGrowId] = useState('')
    const [logId, setLogId] = useState('')
    const [loading, setLoading] = useState(false)
    const [relevantLog, setRelevantLog] = useState({})
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        async function fetchUser() {
            setLoading(true);
            let response = await Axios.get(`/api/user/profile`);
            let data = response.data
            setLoading(false)
            return data.user;
        }
        async function fetchLog(id) {
            let response = await Axios.get(`/api/daily/${id}`);
            let data = response.data
            return data;
        }

        fetchUser().then(user => {
            if (!user._id) {
                return (
                    <Redirect to={'/'} />
                )
            }
            setUser(user)
            return user
        })
            .then(user => {

                let url = window.location.href

                if (url.indexOf("?log_id=") !== -1) {
                    let tmpLogId = url.split("=")[1]
                    setLogId(tmpLogId)
                    fetchLog(tmpLogId)
                        .then(log => {
                            console.log("DAILY LOG:  ", log)
                            setGrowId(log.grow)
                        })
                        .catch(err => console.log(err))
                }
                else if (url.indexOf("?grow_id=") !== -1) {
                    setGrowId(url.split("=")[1])
                } else {
                    setGrowId(user.defaultGrow)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const handleEditModeChange = bool => setEditMode(bool)

    return (
        <>
            <LeftSliderBar {...props} />
            <div className="align-me">
                {editMode ?

                    <DailyLogForm {...props}
                        growId={growId}
                        logId={logId}
                        userId={user._id}
                        defaultGrow={user.defaultGrow}
                        log={relevantLog}
                        handleEditModeChange={handleEditModeChange}
                    />
                    :
                    <DailyLogView
                        // logId={logId}
                        handleEditModeChange={handleEditModeChange}
                    />
                }
            </div>
        </>
    );
};

export default DailyLogPage;