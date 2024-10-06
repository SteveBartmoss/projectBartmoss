
export const getOracle=async()=>{
    const url='https://yesno.wtf/api'
    const response=await fetch(url);
    const data=await response.json()

    return data
}