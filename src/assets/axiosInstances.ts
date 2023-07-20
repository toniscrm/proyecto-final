import axios from "axios"

const clientsInstance = axios.create({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    baseURL: import.meta.env.VITE_API_URL || "",
})

export { clientsInstance }
