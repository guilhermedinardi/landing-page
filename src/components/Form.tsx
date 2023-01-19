import {useForm} from 'react-hook-form'
import styled from 'styled-components'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface IFormData {
  name: string;
  email: string;
  phone: number;
  privacyTerms: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.number().positive().integer().required(),
  privacyTerms: yup.boolean().required(),
}).required()

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormData>({
    resolver: yupResolver(schema)
  })
  console.log(errors)
  const onSubmit = (data:IFormData) => {
    console.log(data)
  };

  return (
    <FormContainer method="POST" action="/get_data">
      <FormLabel>
        <Input
          className={errors?.name && 'input-error'}
          type='text'
          placeholder='Seu nome' 
          {...register('name', {required: true})}
        />
          {errors?.name?.type === 'required' && (
            <Span className='error-message'>Nome é obrigatório</Span>
          )}
      </FormLabel>
      <FormLabel>
        <Input
          className={errors?.name && 'input-error'}
          type='text'
          placeholder='Seu melhor email' 
          {...register('email', {required: true})}
        />
          {errors?.email?.type === 'required' && (
            <Span className='error-message'>Email é obrigatório</Span>
          )}
      </FormLabel>
      <FormLabel>
        <Input
          className={errors?.name && 'input-error'}
          type='text'
          placeholder='Telefone' 
          {...register('phone', {required: true})}
        />
          {errors?.phone?.type === 'required' && (
            <Span className='error-message'>Telefone é obrigratório</Span>
          )}
      </FormLabel>
      <FormCheckbox>
        <Input
          className='checkbox-size'
          type='checkbox'
          placeholder='privacy-policy' 
          {...register('privacyTerms', {required: true})}
        /> 
          <Label>Eu aceito os termos de privacidade</Label>
          {errors?.phone?.type === 'required' && (
            <Span className='error-message'>Politica de privacidade é obrigratório</Span>
          )}
      </FormCheckbox>
      <FormLabel>
        <Button onClick={() => handleSubmit(onSubmit)()}>Quero investir melhor</Button>
      </FormLabel>
    </FormContainer>
  )
}

export default Form

export const FormContainer = styled.form`
  width: 35.81em;
  height: 24.56em;
  border-radius: 55px;
  margin-right: 20em;
  background: transparent linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(128, 128, 128, 0.24) 100%);
  display: flex;
  flex-direction: column;
  padding-top: 2em;
`
export const FormLabel = styled.div`
  background-color: #F6F6F83B;
  border: 1px solid #A5A5A5;
  border-radius: 10px;
  opacity: 1;
  margin: 12px 5em;
  width: 26em;
  height: 3em;  
`

export const Input = styled.input`
  width: 26em;
  height: 3em;  
  transition: background-color 0.2s ease 0s;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  line-height: 19px;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  background: rgba(246, 246, 248, 0.23);
  ::placeholder{
    color: #fff;
    opacity: 0.66;
  }
  .input-error{
    outline: 1px solid rgb(255, 72, 72);
  }
}
`
export const FormCheckbox = styled.div`
  padding-left: 5em;
  display: flex;
  align-items: center;
  .checkbox-size{
    width: 1em;
    background: rgba(246, 246, 248, 0.23);
  }
  
`
export const Span = styled.span`
  color: rgb(255, 72, 72);
  font-size: 0.75rem;
  margin-top: 8px;
`

export const Label = styled.label`
  padding-left: 10px;  
  color: #fff;
  opacity: 0.66;  
`
export const Button = styled.button`
  width: 26em;
  height: 3em;  
  border: none;
  background: transparent linear-gradient(180deg, rgba(239, 16, 67, 1) 0%, rgba(255, 154, 177, 1) 100%);
  box-shadow: 0px 0px 30px rgba(239, 16, 67, 1);
  border-radius: 10px;
  opacity: 1;
  text-align: center;
  font: normal normal 600 16px/19px Montserrat;
  letter-spacing: 0px;
  color: var(--text-color);
  cursor: pointer;
`
