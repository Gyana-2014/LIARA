import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link onClick={() => scrollTo(0, 0)} to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
      <div className='border rounded-lg overflow-hidden hover:shadow-md transition-all h-full flex flex-col'>
        {/* Image Container */}
        <div className='w-full h-52 flex items-center justify-center bg-white p-2'>
          <img
            src={image[0]}
            alt={name}
            className='max-h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105'
          />
        </div>

        {/* Text */}
        <div className='p-2 text-center flex flex-col grow justify-between'>
          <p className='pt-2 pb-1 text-sm font-medium truncate'>{name}</p>
          <p className='text-sm font-semibold'>{currency}{price}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
