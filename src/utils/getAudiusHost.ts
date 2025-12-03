import axios from "axios"

export const getAudiusHost = async () => {
    const res = await axios.get('https://api.audius.co/')
    return res.data.data[0]
}