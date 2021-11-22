import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const EmployeeDetail = () => {

    const {employeeId} = useParams()
    const [employee, set] = useState({})
    
    useEffect(
        () => {
            return fetch(`http://localhost:8088/employees/${employeeId}`)
            .then (res => res.json())
            .then((employee)=> {
                set(employee)
            })
        },
        [employeeId]
    )
    return (<>
            <section className="employee">
                <h3 className="employee__name">{employee?.name}</h3>
                <div className="employee__specialty">Specialty: {employee?.specialty}</div>
            </section>
    
    </>)
}