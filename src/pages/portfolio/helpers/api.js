import axios from "axios";

export const getOracle=async()=>{
    let response = null
    response = await axios.get('https://yesno.wtf/api')
    return response.data
}