import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { getEmployees } from "../ApiManager"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [employeespecialties, addSpecialty] = useState("")
    const history = useHistory()
    useEffect(
        () => {
                getEmployees()
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */

        const employeeSpecialties = employees.map(
            (employee) => {
                return employee.specialty
            }
        ).join(", ")

        addSpecialty(employeeSpecialties)
    }, [employees])

    return (
        <>
        <div>
            <button onClick={() => history.push("/employees/create")}>Hire Employee</button>
        </div>

            <div>
                Specialties: {employeespecialties}
            </div>

            { 
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`/employees/${employee.id}`}>{employee.name}</Link> </p>
                    }
                )
            }
        </>
    )
}
