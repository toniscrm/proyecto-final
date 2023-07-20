import axios from "axios"

const clientsInstance = axios.create({
    baseURL: "https://cursoreact.ngrok.dev"
})

export { clientsInstance }