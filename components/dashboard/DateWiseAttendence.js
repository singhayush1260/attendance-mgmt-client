import React from 'react'
import classes from '../../styles/pages/Dashboard.module.scss'
import { Table } from '@nextui-org/react';

const DateWiseAttendence = () => {


    return (
        <div className={classes.dateWise_attendece}>
            <h2>Date Wise Attendence</h2>
            <hr />

            <div className={classes.date_div}>
                <span>Date From(dd/mm/yyyy) </span>
                <input disabled type="date" name="" id="" placeholder='' />
                <span>To</span>
                <input disabled type="date" name="" id="" placeholder='' />
                <button>Show</button>
            </div>

            <Table>
                <Table.Header>
                    <Table.Column>
                        SNo.
                    </Table.Column>
                    <Table.Column>
                        Session
                    </Table.Column>
                    <Table.Column>
                        Program
                    </Table.Column>
                    <Table.Column>
                        Semester
                    </Table.Column>
                    <Table.Column>
                        Date
                    </Table.Column>
                    <Table.Column>
                        Subject Name
                    </Table.Column>
                    <Table.Column>
                        Status
                    </Table.Column>
                </Table.Header>
                <Table.Body>
                    <Table.Row key='1'>
                        <Table.Cell>
                            1
                        </Table.Cell>
                        <Table.Cell>
                            2020
                        </Table.Cell>
                        <Table.Cell>
                            B.tech
                        </Table.Cell>
                        <Table.Cell>
                            Sem VI
                        </Table.Cell>
                        <Table.Cell>
                            17/04/2023
                        </Table.Cell>
                        <Table.Cell>
                            WT
                        </Table.Cell>
                        <Table.Cell>
                            Status
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            
        </div>
    )
}

export default DateWiseAttendence