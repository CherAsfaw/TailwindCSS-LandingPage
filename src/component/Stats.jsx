import React from 'react'
import style from '../style'
import { stats } from '../constants'

function Stats() {
  return (
    <section className={`${style.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((state) => (
        <div key={state.id} className='flex-1 flex justify-start items-center m-3'>
          <h1
            className="font-poppins font-semibold sm:text-[40px] text-[30px]
           sm:leading-[53px] leading-[43px] text-white"
          >
            {state.value}
          </h1>
          <p
            className="font-poppins font-normal sm:text-[20px] text-[15px]
           sm:leading-[26px] leading-[23px] text-gradient uppercase ml-3"
          >
            {state.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats