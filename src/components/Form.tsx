import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'

export const Box = styled.div`
  width: 35.81em;
  height: 24.56em;
  border-radius: 55px;
  opacity: 0.24;
  margin-right: 18em;
  background: transparent linear-gradient(180deg, #FFFFFF 0%, #808080 100%) 0% 0% no-repeat padding-box;
  background: transparent linear-gradient(180deg, var(--text-color) 0%, #808080 100%) 0% 0% no-repeat padding-box;

`


const Form = () => {
  const { register,  } = useForm()
  const onSubmit = () =>{};

  return (
    <Box>
      <form>
        <label>Nome</label>
        <input
          type='text'
          placeholder='Seu nome' 
          {...register('name')}
        />
      </form>
    </Box>
  )
}

export default Form