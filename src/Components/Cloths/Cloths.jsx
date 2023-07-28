import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import Card from './Card';
// import Loader from '../Loader/Loader';

const Cloths = () => {
    const [cloths, setCloths] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        fetch("shops.json")
          .then((res) => res.json())
          .then((data) => {
            setCloths(data);
          });
      }, [cloths]);

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