import React from 'react'
import style from '../style'
import Button from './Button'

function CTA() {
  return (
    <section className={`${style.padding} ${style.marginY} ${style.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow flex md:flex-row flex-col p-6 sm:p-16}`}>
      <div className='flex-1 flex flex-col'>
        <h1 className={style.heading2}>Let’s try our service now!</h1>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={` ${style.flexCenter} mt-10 md:mt-0 md:ml-10 ml-0`}>
        <Button styles="bg-blue-gradient font-medium" />
      </div>
    </section>
  );
}

export default CTA