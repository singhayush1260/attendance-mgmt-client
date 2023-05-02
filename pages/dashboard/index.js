import React, { createContext } from 'react'
import classes from '../../styles/pages/Dashboard.module.scss'
import Image from 'next/image'
import AttendenceDetails from '../../components/dashboard/AttendenceDetails'
import DateWiseAttendence from '../../components/dashboard/DateWiseAttendence'

const dashboard = () => {

    const dummy_data = [{
        admission_no: '12345',
        name: "singh",
        session: '2020',
        program: 'B.Tech',
        roll_no: '1234567890',
        sem: '6'
    },
    {
        admission_no: '12346',
        name: "neeraj",
        session: '2020',
        program: 'B.Tech',
        roll_no: '1234567890',
        sem: '6'
    },
    {
        admission_no: '12347',
        name: "sharma",
        session: '2020',
        program: 'B.Tech',
        roll_no: '1234567890',
        sem: '6'
    },
    {
        admission_no: '12348',
        name: "another",
        session: '2020',
        program: 'B.Tech',
        roll_no: '1234567890',
        sem: '6'
    }]
    
    return (
        <>
            <div className={classes.header}>
                <Image src='' alt='College logo' />
                <h2>DRONACHARYA GROUP OF INSTITUTIONS</h2>
            </div>
            <div className={classes.user_details}>
                <DataContext.Provider value={dummy_data}>
                    <AttendenceDetails />
                    <DateWiseAttendence />
                </DataContext.Provider>
            </div>
            
        </>
    )
}

export const DataContext = createContext([]);

export default dashboard