import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'

function SendMail () {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = formData => {}
  const dispatch = useDispatch()

  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <CloseIcon
          className='sendMail__close'
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='to'
          placeholder='To'
          type='email'
          ref={register({ required: true })}
        />
        {errors.to && <small className='sendMail__error'>* Required</small>}
        <input
          name='subject'
          placeholder='Subject'
          type='text'
          ref={register({ required: true })}
        />
        {errors.subject && (
          <small className='sendMail__error'>* Required</small>
        )}

        <input
          name='message'
          placeholder='Message'
          type='text'
          className='sendMail__message'
          ref={register({ required: true })}
        />
        {errors.message && (
          <small className='sendMail__error'>* Required</small>
        )}

        <div className='sendMail__options'>
          <Button
            color='primary'
            type='submit'
            className='sendMail__send'
            variant='contained'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
