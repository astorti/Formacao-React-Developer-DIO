import { Container, Row, LeftText, RightContent, MainRightText, SecondaryRightText, CreateAccountButton, ThirdRightText, GreenColorText } from './styles';
import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { MdEmail, MdLock, MdPerson } from "react-icons/md";

const SignUp = () => {
    return (
        <div>
            <Header />
            <Container>
                <LeftText>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</LeftText>
                <RightContent>
                    <MainRightText>Comece agora grátis.</MainRightText>
                    <SecondaryRightText>Crie sua conta e make the change._</SecondaryRightText>
                    <Input leftIcon={<MdPerson className='icons' />} placeholder="Nome completo"/>
                    <Input leftIcon={<MdEmail className='icons' />} placeholder="E-mail"/>
                    <Input leftIcon={<MdLock className='icons' />} placeholder="Password" />
                    <CreateAccountButton>
                        <Button variant='secondary' title="Criar minha conta"/>
                    </CreateAccountButton>
                    <SecondaryRightText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SecondaryRightText>
                    <Row>
                        <ThirdRightText>Já tenho conta.</ThirdRightText>
                        <GreenColorText>Fazer login</GreenColorText>
                    </Row>
                </RightContent>
            </Container>
            
        </div>
    )
}

export {SignUp}