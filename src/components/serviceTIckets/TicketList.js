import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Tickets.css";
import { Link } from "react-router-dom"
import { getTickets } from "../ApiManager";

export const TicketList = () => {
    const [tickets, addticket] = useState([])
    const history = useHistory()
    
    const fetchTickets = () => {
                getTickets()
                .then((tickets) => {
                    addticket(tickets)
                })
    }
    useEffect(
        () => {
            fetchTickets()
        },
        []
    )

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
        .then(()=> {
            fetchTickets()
        })
    }



    return (<>
        <div>
            <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
        </div>

        {tickets.map((ticket) => {
            return <p className={ticket.emergency ? "emergency ticket" : "ticket"} key={`ticket--${ticket.id}`}>
                {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                <button onClick={() => {
                    deleteTicket(ticket.id)
                }}>Delete</button>

            </p>
        })}


    </>)

}
