import {useEffect, useState}  from 'react'

export const useFetchAllSites = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try { 
                const result = await fetch('https://interview.staging.atresplayer.com/sites')
                const data = await result.json()
                console.log(data, 'all data')
                setData(data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchData()
    } , [])

    return { data, loading, error };
}
