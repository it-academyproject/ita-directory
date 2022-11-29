import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../atoms'
import Modal from './Modal/Modal'
import Input from '../atoms/Forms/Input'
import { TextArea } from '../molecules'
import { colors } from '../../theme'

import contactSchema from '../../validation/contactModalSchema'

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${colors.lightGray};
`

const TextAreaStyled = styled(TextArea)`
  width: 100%;
  padding: 0.5em 1rem;
  margin: 5px 0px;
  border-radius: 0.5rem;
  border: 1px solid #b0b0b0;
  font-size: 16px;
`

function ContactModal({ active, hideModal }) {
  const [animatedState, setAnimatedState] = useState(false)
  const [disabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const sendContact = (name, email, message, callback) => {
    setAnimatedState(true)
    setIsDisabled(true)
    setIsLoading(true)
    setTimeout(() => {
      setAnimatedState(false)
      setIsDisabled(false)
      setIsLoading(false)
      // console.log(`send contact => ${name}, ${email}, ${message}`)
      callback('The message could not be sent')
    }, 2000)
  }

  const submitForm = (data) => {
    const { name, email, message } = data
    sendContact(name, email, message, () => {})
  }

  return (
    <Modal active={active} hideModal={hideModal} title="Contactar">
      <form onSubmit={handleSubmit(submitForm)}>
        <Input
          type="text"
          name="name"
          placeholder="Nombre"
          label="Nombre"
          inputContainerClassName="input-container"
          register={register('name')}
          error={errors.name?.message}
        />

        <Input
          type="text"
          name="email"
          placeholder="Email"
          label="Email"
          inputContainerClassName="input-container"
          register={register('email')}
          error={errors.email?.message}
        />

        <TextAreaStyled
          name="message"
          label="Mensaje"
          placeholder="Escribe aquí tu mensaje"
          className="contact-modal__textarea"
          register={register('message')}
          error={errors.message?.message}
        />

        <Button
          text="Enviar"
          loadingText="Enviando"
          iconPosition="left"
          type="submit"
          className="darkBlue"
          isLoading={isLoading}
          animated={animatedState}
          disabled={disabled}
          buttonStyles={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: 'auto',
            minWidth: '110px',
            marginRight: 0,
            paddingRight: '15px',
            paddingLeft: '15px',
            backgroundColor: colors.extraDarkBlue,
          }}
          iconStyles={{
            width: '1.5rem',
            height: '1.5rem',
          }}
        />
      </form>

      <ButtonWrapper>
        <Button
          text="Cancelar"
          iconPosition="left"
          type="submit"
          onClick={() => hideModal()}
          icon="cancel"
          buttonStyles={{
            color: colors.lightGrey,
            background: 'transparent',
            boxShadow: 'none',
            fontSize: '0.95rem',
            fontFamily: 'Arial',
            width: 'auto',
            paddingLeft: 0,
          }}
          iconStyles={{
            paddingRight: '5px',
            paddingLeft: '0px',
            width: '1rem',
            height: '1rem',
          }}
        />
      </ButtonWrapper>
    </Modal>
  )
}

ContactModal.propTypes = {
  active: PropTypes.bool,
  hideModal: PropTypes.func,
}

export default ContactModal
