import React, { useState } from "react"
import { useHistory } from "react-router";

export const EmployeeForm = () => {
    const [employee, update] = useState({
        name: "",
        specialty: ""
    });
    const history = useHistory()

    const saveEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty
        }

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOptions)
        .then(()=>{
            history.push("/employees")
        })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                    onChange={
                        (evt)=>{
                            const copy = {...employee}
                            copy.name = evt.target.value
                            update(copy)
                        }
                    }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="description">Specialty:</label>
                    <input
                    onChange={
                        (evt)=>{
                            const copy = {...employee}
                            copy.specialty = evt.target.value
                            update(copy)
                        }
                    }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Input your Specialty"
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Hire Employee
            </button>
        </form>
    )
}
