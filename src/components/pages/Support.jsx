import React from 'react'

function Support() {
  return (
    <section className='bg2 mt-12 pt-25 pb-30 h-[90vh]'>
      <div className='max-w-[1250px] mx-auto px-5 text-center mt-30'>
        <h3 className='text-[30px] text-[#ddd] font-medium py-3'>Steam Support</h3>
        <p className='text-[#67a9d8] text-[20px] py-1'>What do you need help with?</p>
        <div className='max-w-[700px] mx-auto mt-6 flex'>
          <input className='bg-[#354150] min-w-[120px] w-[94%] sm:w-[90%] text-[#eee] rounded-xs px-3 py-1 sm:py-2.5 text-[18px] border border-blue-400 border-r focus:border-[#66c0f4] focus:bg-[#242931] focus:outline-none' type="text" placeholder='search...' />
          <button className='bg-[#67a9d8] hover:bg-[#4f95bd] cursor-pointer text-[#eee] px-3'>Send</button>
        </div>
      </div>
    </section>
  )
}

export default Support