import styled from 'styled-components'
import Header from './Header'

const Footer = () => {
  return (
    <FooterComponent>
      <div>
        <Header/>
      </div>
      <Copyright>
        <span>© 2023 Faz Capital. Todos os direitos reservados.</span>
      </Copyright>
      <Span>A Faz Capital Agente Autônomo de Investimentos Ltda é uma empresa de agentes autônomos de investimento devidamente registrada na Comissão de Valores Mobiliários, na forma da Resolução CVM 16 2021.
        A Faz Capital Agente Autônomo de Investimentos Ltda atua no mercado financeiro credenciada à XP Investimentos CCTVM S/A, o que pode ser verificado através do site da CVM ou através do site da ANCORD.
        Na forma da legislação da CVM, o Agente Autônomo de Investimento não pode administrar ou gerir o patrimônio de investidores. 
        O Agente Autônomo é um intermediário e depende da autorização prévia do cliente para realizar operações no mercado financeiro. 
        O investimento em ações é um investimento de risco e rentabilidade passada não é garantia de rentabilidade futura. 
        Na realização de operações com derivativos existe a possibilidade de perdas superiores aos valores investidos, podendo resultar em significativas perdas patrimoniais. 
        Para informações e dúvidas, favor contatar seu Agente Autônomo de Investimentos. 
        Para reclamações, favor contatar a Ouvidoria da XP Investimentos no telefone nº 0800 722 3710.
      </Span>
      
    </FooterComponent>
  )
}

export default Footer

export const FooterComponent = styled.footer`
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  color: var(--text-color);
`
export const LogoComponent = styled.img`
  width: 22%;
  height: 5vh;
  margin-left: 21.5em;
  margin-bottom: -2em;
`
export const Span = styled.span`
  font-size: 10px;
  display: inline-block;
  width: 40%;
  align-self: center;
  margin: 6em;

  @media (max-width: 770px){
    width: 90%;
  }
`
export const Copyright = styled.div`
  display: inline-flex;
  justify-content: end;
  margin-top: -2em;
  span{
    font: normal normal 600 14px Montserrat;
    padding-right: 12em;
    @media (max-width: 770px){
      padding-right: 3em;
      margin-top: 2em;
    }
  }
`
 