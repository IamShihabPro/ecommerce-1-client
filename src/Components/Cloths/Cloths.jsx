import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import Card from './Card';
import { useSearchParams } from 'react-router-dom';
// import Loader from '../Loader/Loader';

const Cloths = () => {
    const [cloths, setCloths] = useState([])
    // const [loader, setLoader] = useState(false)

    const [params, setParams] = useSearchParams()

    const category = params.get('category')
    // console.log(category);

    useEffect(() => {
        fetch("shops.json")
          .then((res) => res.json())
          .then((data) => {
           if(category){
            const filtered = data.filter(cloth => cloth.category === category)
            setCloths(filtered)
           } 
            else{
                setCloths(data);
            }
          })
          .catch(err => console.log(err))
      }, [category]);

    //   if(loading){
    //     return <Loader></Loader>
    //   }
    return (
        <Container>
            <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10'>
                {
                    cloths.map(cloth => <Card key={cloth.id} cloth={cloth}></Card>)
                }
            </div>
            
        </Container>
    );
};

export default Cloths;