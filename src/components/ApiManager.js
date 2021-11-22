export const getCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
}

export const getEmployees = () => {
    return fetch("http://localhost:8088/employees")
        .then(res => res.json())
}

export const getTickets = () => {
    return fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
        .then(res => res.json())
}