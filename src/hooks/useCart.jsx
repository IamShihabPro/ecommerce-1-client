import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import useAxiosSecure from './useAxiosSecure'

const useCart = email =>{
    const {user, loading} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')

    const [axiosSecure] = useAxiosSecure()

    const { isLoading, isError, data: cart = [], error, refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,

        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_API_URL}/carts?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            // console.log(res);
            return res.json()
        },

        // queryFn: async () => {
        //     const res = await axiosSecure(`/carts?email=${user?.email}`)
        //     console.log('res from axios', res)
        //     return res.data;
        // },


      })
      return [cart, refetch, isLoading]
    
}
export default useCart