import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'


const BuyCredit = () => {

  const { user } = useContext(AppContext);

  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan </h1>
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500' key={index}>
            <img width={40} src={assets.logo_icon} alt="" />
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'>₹{item.price}</span>/ {item.credits} credits
            </p>
            <div className='flex flex-col mt-4'>
              <button className='w-full flex justify-center gap-2 border border-gray-400 mt-2 text-sm rounded-md py-2.5 min-w-52 hover:bg-blue-50 hover:border-blue-400'>
                <img className='h-4' src={assets.razorpay_logo} alt="" />
              </button>
              <button className='w-full flex justify-center gap-2 border border-gray-400 mt-2 text-sm rounded-md py-2.5 min-w-52 hover:bg-blue-50 hover:border-blue-400'>
                <img className='h-4' src={assets.stripe_logo} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit