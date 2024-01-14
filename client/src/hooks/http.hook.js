import {useState,useCallback} from 'react';
import axios from 'axios';
export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error,setErrors] = useState(null)

    const request = useCallback(async (url, body = null,headers = {})=>{
        setLoading(true)
        try{
            const resp = await axios.post("http://localhost:8000/"+url,{body,headers})
            const data = await resp.json()

            if (!resp.ok){
                setLoading(false)
                throw new Error(data.message || 'Неизвестная ошибка')
            }
            setLoading(false)
            return data
        }catch (e){
            setLoading(false)
            setErrors(e.message)
            throw e
        }
    },[])
    const ClearError = () => setErrors(null)
    return {loading,request,error,ClearError}
}