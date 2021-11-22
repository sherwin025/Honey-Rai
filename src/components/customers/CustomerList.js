import React, { useEffect, useState } from "react"
import { getCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [numberofCustomerStatement, setStatement] = useState("")

    useEffect(
        () => {
                getCustomers()
                .then((data) => {
                    setCustomers(data)
                })
        },
        []
    )

    useEffect(
        () => {
            setStatement(`You have ${customers.length} customers`)
        },
        [customers]
    )

    return (
        <>
        <p>{numberofCustomerStatement}</p>
            {
                customers.map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>
    )
}
