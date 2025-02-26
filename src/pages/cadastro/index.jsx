import { MdEmail, MdLock, MdWrapText } from "react-icons/md";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import { Collunm } from "../../components/header/styles";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/cadastrar");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma oara você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Collunm>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="Nome completo" leftIcon={<MdWrapText />} />
              <Input placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input placeholder="Senha" leftIcon={<MdLock />} />
              <Button
                title="Criar minha conta"
                variant="secondary"
                onClick={handleClickSignIn}
                type="buttun"
              />
            </form>
            <Row>
              <p>
                Ao clicar em "cria conta grátis, declaro que aceito as Políticas
                de Privacidade e os termos de Uso da DIO.
              </p>
            </Row>
            <Row>
              <EsqueciText>já tenho uma conta.</EsqueciText>
              <CriarText>Fazer login</CriarText>
            </Row>
          </Wrapper>
        </Collunm>
      </Container>
    </>
  );
};

export { Cadastro };
