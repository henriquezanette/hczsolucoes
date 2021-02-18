import React from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormText, FormButton} from './ContatoElements'

const CContato = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">HCZ soluções</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Deixe uma mensagem pelo site</FormH1>
                        <FormLabel htmlFor = 'nome'>Nome Completo</FormLabel>
                        <FormInput type='name' required/>
                        <FormLabel htmlFor = 'for'>Email</FormLabel>
                        <FormInput type= 'email' required/>
                        <FormLabel htmlFor='text'>Deixe sua Mensagem</FormLabel>
                        <textarea type='textarea' rows = "5" cols= "50"/>
                        <FormButton type='submit'>Enviar</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
            
        </>
    )
}

export default CContato;
