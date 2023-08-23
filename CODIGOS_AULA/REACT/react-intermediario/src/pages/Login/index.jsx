import { Header } from '../../components/Header';
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate  } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (
        <div>
            <Header />
            <Container>
                <Column>
                    <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça se cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <Input placeholder='Email'  leftIcon={<MdEmail/>}/>
                        <Input placeholder='Senha' type='password' leftIcon={<MdLock/>} />
                        <Button title="Entrar" variant='secondary' onClick={handleClickSignIn} type="button" />
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </div>
    )
}

export {Login}