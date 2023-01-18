import {useForm} from 'react-hook-form'
import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 35.81em;
  height: 24.56em;
  border-radius: 55px;
  margin-right: 18em;
  background: linear-gradient(180deg, #FFFFFF 0%, #808080 100%) 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  margin: 0 15em;
  padding-top: 1em;
`
export const FormLabel = styled.div`
  background-color: #F6F6F83B 0% 0% no-repeat padding-box;
  border: 1px solid #A5A5A5;
  border-radius: 10px;
  opacity: 1;
  margin: 12px 4em;
  width: 26em;
  height: 4em;  
`

export const Input = styled.input`
  width: 26em;
  height: 4em;  
  color: #fff;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  line-height: 19px;
  border-radius: 10px;
  border: 1px solid #A5A5A5;

`


const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  console.log(errors)
  const onSubmit = (data:any) => {
    console.log(data)
  };

  return (
    <FormContainer>
      <FormLabel>
        <Input
          className={errors?.name && 'input-error'}
          type='text'
          placeholder='Seu nome' 
          {...register('name', {required: true})}
        />
          {errors?.name?.type === 'required' && (
            <span className='error-message'>Nome é obrigatório</span>
          )}
      </FormLabel>
      <FormLabel>
        <Input
          type='text'
          placeholder='Seu melhor email' 
          {...register('email', {required: true})}
        />
          {errors?.email?.type === 'required' && (
            <span className='error-message'>Email é obrigatório</span>
          )}
      </FormLabel>
      <FormLabel>
        <Input
          type='text'
          placeholder='Telefone' 
          {...register('phone', {required: true})}
        />
          {errors?.phone?.type === 'required' && (
            <span className='error-message'>Telefone é obrigratório</span>
          )}
      </FormLabel>
      <FormLabel>
        <Input
          type='checkbox'
          placeholder='privacy-policy' 
          {...register('privacyTerms', {required: true})}
        /> 
          <label>Eu aceito os termos de privacidade</label>
          {errors?.phone?.type === 'required' && (
            <span className='error-message'>Politica de privacidade é obrigratório</span>
          )}
      </FormLabel>
      <FormLabel>
        <button onClick={() => handleSubmit(onSubmit)()}>Quero investir melhor</button>
      </FormLabel>
    </FormContainer>
  )
}

export default Form