import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'

const useCart = email =>{
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')

    const { isLoading, isError, data: cart = [], error, refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_API_URL}/carts?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json()
        },
      })
      return [cart, refetch, isLoading]
    
}
export default useCart