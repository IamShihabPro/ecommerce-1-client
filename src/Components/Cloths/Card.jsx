import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Card = ({cloth}) => {
    const {id, category, name, image, description, price, colors, sizes,ratings } = cloth
    return (
      <div className='col-span-1 cursor-pointer group bg-slate-100 rounded-md p-2'>
        <div className='flex flex-col gap-2 w-full'>
          <div className=' aspect-square w-full relative overflow-hidden rounded-md'>
            <img className=' object-cover h-full w-full group-hover:scale-110 transition'
              src={image}
              alt='Cloths'/>
            <div className='absolute top-3 right-3'>
              {/* <HeartButton /> */}
            </div>

          </div>

          <div className='font-semibold text-lg'>{name}</div>
          <div className='font-light text-neutral-700'>
            {description}
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='font-semibold'>$ {price}</div>
            <div>
            <Rating style={{ maxWidth: 70 }} value={ratings} readOnly />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Card