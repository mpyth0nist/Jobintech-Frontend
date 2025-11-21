import { useEffect, useState } from 'react'

function useFetch(url){
      
    const [users, setUsers] = useState([])

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false)

    const fetchUsers = async () => {

        try{
            
            const res = await fetch(url)

            const data = await res.json()

            setUsers(data)

            setLoading(false)
        } catch(err){
            setError(true)
            setLoading(false)
            alert(err)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return {users, loading, error}
}

export default useFetch;