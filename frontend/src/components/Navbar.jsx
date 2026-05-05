import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { AiFillHome, AiOutlineAppstore, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium px-4 sm:px-8'>
      
      {/* Logo Text */}
      <Link to='/'>
        <p className='text-3xl sm:text-4xl font-bold tracking-wide font-serif text-gray-800 hover:text-black transition animate-slideInOnce'>
          LIARA
        </p>
      </Link>

      {/* Desktop Nav */}
      <ul className='hidden sm:flex gap-6 text-sm text-gray-700'>
        <NavLink
          to='/'
          className='flex items-center gap-1 hover:text-black hover:underline transition duration-200'
        >
          <AiFillHome size={18} />
          HOME
        </NavLink>

        <NavLink
          to='/collection'
          className='flex items-center gap-1 hover:text-black hover:underline transition duration-200'
        >
          <AiOutlineAppstore size={18} />
          COLLECTION
        </NavLink>

        <NavLink
          to='/about'
          className='flex items-center gap-1 hover:text-black hover:underline transition duration-200'
        >
          <AiOutlineInfoCircle size={18} />
          ABOUT
        </NavLink>

        <NavLink
          to='/contact'
          className='flex items-center gap-1 hover:text-black hover:underline transition duration-200'
        >
          <AiOutlineMail size={18} />
          CONTACT
        </NavLink>
      </ul>

      {/* Right Side Icons */}
      <div className='flex items-center gap-6'>
        <img
          onClick={() => {
            setShowSearch(true)
            navigate('/collection')
          }}
          src={assets.search_icon}
          className='w-5 cursor-pointer'
          alt='search'
        />

        {/* Profile Dropdown */}
        <div className='group relative'>
          <img
            onClick={() => (token ? null : navigate('/login'))}
            className='w-5 cursor-pointer'
            src={assets.profile_icon}
            alt='profile'
          />

          {token && (
            <div className='group-hover:block hidden absolute right-0 pt-4 z-10'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p onClick={() => navigate('/profile')} className='cursor-pointer hover:text-black'>
                  My Profile
                </p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>
                  Orders
                </p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='cart' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt='menu'
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className='flex flex-col text-gray-600'>
          <div
            onClick={() => setVisible(false)}
            className='flex items-center gap-4 p-3 cursor-pointer'
          >
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='back' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
