let officers = []

const setOfficers = (officerArray) => {
    officers = officerArray
}

export const useOfficers = () => officers.slice()

export const getOfficers = () => {
    // Load database state into application state
    return fetch("http://criminals.glassdale.us/officers", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(setOfficers)
}