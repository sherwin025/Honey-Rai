import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeDetail } from "./employees/EmployeeDetail"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/NewEmployeeForm"
import { Ticket } from "./serviceTIckets/TicketDetail"
import { TicketForm } from "./serviceTIckets/TicketForm"
import { TicketList } from "./serviceTIckets/TicketList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>
            <Route path="/tickets/create">
                <TicketForm />
            </Route>
            <Route path="/employees/create">
                <EmployeeForm/>
            </Route>
            <Route path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>
            <Route path="/employees/:employeeId(\d+)">
                <EmployeeDetail />
            </Route>
        </>
    )
}
