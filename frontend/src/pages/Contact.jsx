

import React from 'react'

const Contact = () => {
  return (
   <section>
    <div className='px-4 mx-auto max-w-screen-md'>
      <h3 className='heading text-center'>Contact Us</h3>
      <p className=' mt-8 lg:mt-10 font-light text-center text__para'>
        Got a techincal issue? Want to send feedback about our service?let us know.
      </p>
      <form action="/" className='space-y-8'>
        <div>
          <label htmlFor="email" className='form__label'>
            your Email
          </label>
          <input type="email" id='email' placeholder='example@gmail.com' className='form__input mt-1' />
        </div>
        <div>
          <label htmlFor="subject" className='form__label'>
            Subject
          </label>
          <input type="text" id='subject' placeholder='Let us know how can we help you' className='form__input mt-1' />
        </div>
        <div className='sm:col-span-2'>
          <label htmlFor="message" className='form__label'>
            your message
          </label>
          <textarea rows={6} type="text" id='message' placeholder='leave a comment....' className='form__input mt-1' />
        </div>
        <button type='submit' className='btns rounded sm:w-fit'>Submit</button>
      </form>
    </div>
   </section>
  )
}

export default Contact
