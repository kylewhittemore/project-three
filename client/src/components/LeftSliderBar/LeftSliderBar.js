import './style.css'
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";

export default props => {
    const userId = localStorage.getItem('p3aajjkw-id')
    console.log(userId)
    return (
        <Menu>
            <Link to={`/home`}>Dashboard</Link>
            <Link to={`/newseason`}>New Season</Link>
            <Link to={`/seasons`}>Seasons</Link>
            <Link to={`/dailylogs`}>Daily Logs</Link>
            <Link to={`/images`}>Images</Link>
            <Link to={`/dailylog`}>New Log</Link>
        </Menu>
    );
};