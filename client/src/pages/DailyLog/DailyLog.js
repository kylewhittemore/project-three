import React, { useState, useEffect } from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyLogForm from '../../components/DailyLogForm/DailyLogForm'
import LeftSliderBar from "../../components/LeftSliderBar/LeftSliderBar";
import { Redirect } from 'react-router-dom'
import Axios from 'axios'

function DailyLogPage(props) {
    const [user, setUser] = useState('')
    const [growId, setGrowId] = useState('')
    const [logId, setLogId] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchUser() {
            setLoading(true);
            let response = await Axios.get(`/api/user/profile`);
            let data = response.data
            console.log("USER: " + JSON.stringify(data))
            setLoading(false)
            return data.user;
        }
        fetchUser().then(user => {
            if (!user._id) {
                return (
                    <Redirect to={'/'} />
                )
            }
            console.log("fetch user", user)
            setUser(user)
            return user
        })
            .then(user => {

                let url = window.location.href

                if (url.indexOf("?log_id=") !== -1) {
                    setLogId(url.split("=")[1])
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

    return (
        <>
            <LeftSliderBar {...props} />
            <div className="align-me">
                <DailyLogForm {...props}
                    growId={growId}
                    logId={logId}
                    userId={user._id}
                />
            </div>
        </>
    );
};

export default DailyLogPage;