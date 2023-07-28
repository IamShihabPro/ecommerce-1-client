import React from 'react';
import {  useNavigate, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';

const CategoryBox = ({item}) => {
    const navigate = useNavigate()

    // get query data from url
    const [params, setParams] = useSearchParams()
    // const value = params.get('category')
    // console.log(value);

    const handleCategory = () =>{
        let currentQuery = {}
        if(params){
            currentQuery = queryString.parse(params.toString())
        }
        const updatedQuery = {
            ...currentQuery, category: item.category
        }
        const url = queryString.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, {skipNull: true})

        navigate(url)
    }


    return (
        <div>
           

            <div onClick={handleCategory} className='flex flex-row items-center justify-center gap-2 cursor-pointer p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500 mt-4'>
                
                <div className=''> {item.category}</div>
 
            </div>
        </div>
    );
};

export default CategoryBox;