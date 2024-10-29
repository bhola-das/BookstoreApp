import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='flex justify-center pt-20 '>
        <div className='rounded-md h-96 w-[50%] bg-gray-100'>
            <p className='text-center text-bold pt-7 text-2xl text-pink-400 underline'>Contact me!</p>
            <div className=' pt-6 flex flex-col justify-center items-center gap-2'>
                <div>
                <p>Name</p>
                <input type="text" placeholder='Enter your Name' className='px-2 py-2 rounded-md' />
                </div>
                
                <div>
                <p>email</p>
                <input type="email" placeholder='Enter your email' className='px-2 py-2 rounded-md' />
                </div>
                <div>
                   <p>Write Message</p>
                   <textarea className='textarea pr-10' name="" id="" ></textarea>
                </div>
                <button className='px-2 py-2 rounded-md bg-blue-400 text-white'>Submit</button>

            </div>

        </div>

    </div>
    </>
  )
}

export default Contact