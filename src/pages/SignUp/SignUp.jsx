import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc'
import { useContext, useRef } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { TbFidgetSpinner }  from 'react-icons/tb'

const SignUp = () => {
    const {signIn,setLoading, loading, signInWithGoogle, updateUserProfile, createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'



    // create user
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        // img upload
        const image = form.image.files[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`

        fetch(url, {
            method: "POST",
            body: formData
        }).then(res=> res.json())
        .then(imgData=>{
            const imgURL = imgData.data.display_url
            console.log(imgURL);
            createUser(email, password)

            .then(res =>{   
                console.log(res.user);

                updateUserProfile(name, imgURL)
                .then(() =>{   
                  const saveUser = {name: name, email: email }
                  fetch(`${import.meta.env.VITE_API_URL}/users`,{
                    method: "POST",
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify(saveUser)
                  })
                  .then(res => res.json())
                  .then(data =>{
                    if(data.insertedId){
                      toast.success('Sign up successfull')
                      navigate(from, {replace: true})
                    }
                  })

                  //  toast.success('Sign up successfull')
                  //   navigate(from, {replace: true})
                })
                .catch(err =>{
                    setLoading(false)
                    console.log(err.message);
                    toast.error(err.message)
                    
                })

            })
            .catch(err =>{
                setLoading(false)
                console.log(err.message);
                toast.error(err.message)
                
            })
        })
        .catch(err =>{
            setLoading(false)
            console.log(err.message);
            toast.error(err.message)
            
        })
    }
        
    // handle google login 
        const handleGoogleLogin = () =>{
            signInWithGoogle()
            .then(res =>{   
                console.log(res.user);

                const saveUser = {name: res.user.displayName, email: res.user.email }
                  fetch(`${import.meta.env.VITE_API_URL}/users`,{
                    method: "POST",
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify(saveUser)
                  })
                  .then(res => res.json())
                  .then(data =>{
                    if(data.insertedId){
                      toast.success('Sign up successfull')
                      navigate(from, {replace: true})
                    }
                  })


                navigate(from, {replace: true})
            })
            .cath(err =>{
                setLoading(false)
                console.log(err.message);
                toast.error(err.message)
                
            })
        }


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to AirCNC</p>
        </div>
        <form
        onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
                {
                    loading? <TbFidgetSpinner className='m-auto animate-spin' size={24}></TbFidgetSpinner> : 'Continue'
                }

                <Toaster />
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={handleGoogleLogin} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp