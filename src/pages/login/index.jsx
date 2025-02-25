import {MdEmail, MdLock} from 'react-icons/md'
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import { Collunm, Input } from "../../components/header/styles";

const Login = () => {
    return (
        <>
            <Header />
            <Container>
                <Collunm>
                    <Title>
                        A plataforma oara você aprender com experts, dominar as principais 
                        tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Collunm>
                <Collunm>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                        <form>
                            <Input placeholder="E-mail" leftIcon={<MdEmail />}/>   
                            <Input placeholder="Senha" leftIcon={<MdLock />}/>
                            <Button title="Entrar" variant="secondary" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Collunm>
            </Container>
        </>
    )
}

export {Login}
