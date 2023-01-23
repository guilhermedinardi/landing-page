import {useForm} from 'react-hook-form'
import styled from 'styled-components'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

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
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IFormData>({
    resolver: yupResolver(schema)
  })

  const navigate = useNavigate();

  const onSubmit = (data:IFormData) => {
    const queryParameters = new URLSearchParams(window.location.search)
    const utm_medium = queryParameters.get("utm_medium")
    const utm_campaign = queryParameters.get("utm_campaign")
    const utm_source = queryParameters.get("utm_source")
    const utm_content = queryParameters.get("utm_content")
    const options = {
      method: 'POST',
      headers: {accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        event_type: 'CONVERSION',
        event_family: 'CDP',
        payload: {
          conversion_identifier: 'lp-tipo-um-banco',
          name: data.name,
          email: data.email,
          phone: data.phone,
          traffic_medium: utm_medium,
          traffic_source: utm_source,
          traffic_campaign: utm_campaign,
          traffic_value: utm_content
        }
      })
    };
    try{
      fetch('https://api.rd.services/platform/conversions?api_key=PEisfQrkZObaRupEUNMrAIpKAIhzHNaDHIJk', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
        <Button type='submit' onClick={() => navigate("/obrigado")}>
          {isSubmitting}
          Quero investir melhor
        </Button>
      </FormLabel>
    </FormContainer>
  )
}

export default Form

export const FormContainer = styled.form`
  width: 36vw;
  height: 52.56vh;
  border-radius: 55px;
  margin-right: 20em;
  background: transparent linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(128, 128, 128, 0.24) 100%);
  display: flex;
  flex-direction: column;
  padding-top: 2em;
  margin-left: 2em;
  align-items: center;

  @media (max-width: 720px){
    width: 100vw;
    height: 52vh;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 10px 20px;
  }

`
export const FormLabel = styled.div`
  background-color: #F6F6F83B;
  border: 1px solid #A5A5A5;
  border-radius: 10px;
  opacity: 1;
  margin: 12px 5em;
  height: 6vh;
  width: 25.7vw;
  @media(max-width: 720px){
    width: 23em;
    height: 7vh;
    margin: 12px 0em;
  }
`

export const Input = styled.input`
  width: 25.7vw;
  height: 6vh;
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

  @media(max-width: 720px){
    width: 20em;
    height: 7vh;
  }
}
`
export const FormCheckbox = styled.div`
  padding-left: 6em;
  display: flex;
  align-items: center;
  align-self: baseline;
  .checkbox-size{
    width: 1em;
    background: rgba(246, 246, 248, 0.23);
  }

  @media(max-width: 720px){

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
  width: 25.7vw;
  height: 6vh;
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
  :hover{
      background: var(--text-color);
      color: var(--second-color);
    }
  .spin {
    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 5px #cfd0d1;
    border-bottom-color: rgba(239, 16, 67, 1);
    border-radius: 50%;
    content: "";
    height: 40px;
    position: absolute;
    top: 10%;
    left: 10%;
    transform: translate3d(-50%, -50%, 0);
    width: 40px;
    will-change: transform;
    
  }

  @media(max-width: 770px){
    width: 20em;
    height: 7vh;
  }
`
