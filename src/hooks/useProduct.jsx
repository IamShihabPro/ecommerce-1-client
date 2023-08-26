import { useQuery } from '@tanstack/react-query'


const useProduct = () =>{


    const { isLoading, isError, data: products = [], error, refetch } = useQuery({
        queryKey: ['products'],
        // enabled: !loading,

        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_API_URL}/products`)
            return res.json()
        },

      })
      return [products, refetch, isLoading]
    
}
export default useProduct