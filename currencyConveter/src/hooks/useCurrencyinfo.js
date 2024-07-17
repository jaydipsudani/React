import {useEffect , useState} from "react"

function useCurrencyInfo(currency){

    useEffect(()=>{
        const [data,setData] = useState({});
        fetch(' https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json')
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        return data
    },[currency])     
}
export default useCurrencyInfo;