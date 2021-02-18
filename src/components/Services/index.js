import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'

const Services = () => {
    return (
        <>
        <ServicesContainer id="services">
            <ServicesH1>Nosso serviços</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Desenvolvimento</ServicesH2>
                    <ServicesP>Desenvolvimento do seu site, programado em REACT com a utilização de Styled Components.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Designs modernos</ServicesH2>
                    <ServicesP>Realizamos designs novos e responsivos para o seu site, para que atraiam os olhos do consumidor .</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Analytics</ServicesH2>
                    <ServicesP>Analytics do seu site, para o monitoramento de acessos ao site, duração de uso, público alvo, etc  .</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        </>
    )
}

export default Services
