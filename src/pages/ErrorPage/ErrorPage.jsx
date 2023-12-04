import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Container from '../../Components/Container/Container'

// import Logo from '../../assets/error.jpg'

const ErrorPage = () => {
//   const { error } = useRouteError()
  return (
    <Container className=''>
        <div className="hero min-h-screen"  style={{backgroundImage: 'url(https://i.ibb.co/RHrpqG0/error.jpg)'}}>
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <button className="btn btn-primary"> 
                    <Link
                    to='/'
                    className='btn btn-primary px-8 py-3 font-bold font-serif text-white'
                >
                    Back to homepage
                </Link>
            </button>
            </div>
        </div>
    </div>
    </Container>
  )
}

export default ErrorPage