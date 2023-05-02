import React, { useContext } from 'react'
import classes from '../../styles/pages/Dashboard.module.scss'
// import { DataContext } from '@/pages/dashboard';

const AttendenceDetails = () => {

    // const dummy_data = useContext(DataContext);

    return (
        <div className={classes.attendence_div}>
            <h2>Attendence Details</h2>
            <hr />
            <div className={classes.attendence_details}>
                <div>
                    <label htmlFor="admissionNumber">Admission Number</label>
                    <input type="text" placeholder='{data.admission_no}' disabled name='admissionNumber' />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='{data.name}' disabled name='name' />
                </div>
                <div>
                    <label htmlFor="session">Session</label>
                    <input type="text" placeholder='{data.session}' disabled name='session' />
                </div>
                <div>
                    <label htmlFor="program">Program</label>
                    <input type="text" placeholder='{data.program}' disabled name='program' />
                </div>
                <div>
                    <label htmlFor="roll_no">Roll No</label>
                    <input type="text" placeholder='{data.roll_no}' disabled name='roll_no' />
                </div>
                <div>
                    <label htmlFor="sem">Semester</label>
                    <input type="text" placeholder='{data.sem}' disabled name='sem' />
                </div>
                <div>
                    <label htmlFor="college">College</label>
                    <input type="text" placeholder='DGI' disabled name='college' />
                </div>
                <div>
                    <label htmlFor="enrollmentNumber">Enrollment Number</label>
                    <input type="text" placeholder='{data.admission_no}' disabled name='enrollmentNumber' />
                </div>

                {/* {dummy_data.map((data)=>{
                    return <div>
                                <div>
                                    <label htmlFor="admissionNumber">Admission Number</label>
                                    <input type="text" placeholder={data.admission_no} disabled name='admissionNumber'/>
                                </div>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" placeholder={data.name} disabled name='name'/>
                                </div>
                                <div>
                                    <label htmlFor="session">Session</label>
                                    <input type="text" placeholder={data.session} disabled name='session'/>
                                </div>
                                <div>
                                    <label htmlFor="program">Program</label>
                                    <input type="text" placeholder={data.program} disabled name='program'/>
                                </div>
                                <div>
                                    <label htmlFor="roll_no">Roll No</label>
                                    <input type="text" placeholder={data.roll_no} disabled name='roll_no'/>
                                </div>
                                <div>
                                    <label htmlFor="sem">Semester</label>
                                    <input type="text" placeholder={data.sem} disabled name='sem'/>
                                </div>
                                <div>
                                    <label htmlFor="college">College</label>
                                    <input type="text" placeholder='DGI' disabled name='college'/>
                                </div>
                                <div>
                                    <label htmlFor="enrollmentNumber">Enrollment Number</label>
                                    <input type="text" placeholder={data.admission_no} disabled name='enrollmentNumber'/>
                                </div>
                        </div>
                })} */}
            </div>

            <div className={classes.function_buttons}>
                <button>Total Attendence</button>
                <button>Monthly Attendence</button>
                <button>Subject wise Attendence</button>
                <button>Semester Attendence</button>
                <button>Date Wise</button>
            </div>

            <div className={classes.color_scheme}>
                <div>
                    <span>Percentage Above 90:</span>
                    <div style={{backgroundColor: 'green'}}></div>
                </div>
                <div>
                    <span>Between 90 and 75:</span>
                    <div style={{backgroundColor: 'greenyellow'}}></div>
                </div>
                <div>
                    <span>Between 75 and 60:</span>
                    <div style={{backgroundColor: 'blue'}}></div>
                </div>
                <div>
                    <span>Between 60 and 45:</span>
                    <div style={{backgroundColor: 'pink'}}></div>
                </div>
                <div>
                    <span>Less Than 45:</span>
                    <div style={{backgroundColor: 'red'}}></div>
                </div>
            </div>

        </div>


    )
}

export default AttendenceDetails