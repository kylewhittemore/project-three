import React from 'react'
import DailyLog from './components/DailyLog/DailyLog'
import GrowTable from './components/GrowTable/GrowTable'
import DailyLogTable from './components/DailyLogTable/DailyLogTable'
import StaticForm from './components/StaticForm/StaticForm'
import Populate from './components/populate/populateDB';

export default function Test() {

    return (
        <>
            <Populate />
        </>
    )
}