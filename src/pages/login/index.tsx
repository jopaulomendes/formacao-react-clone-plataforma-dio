import { MdEmail, MdLock } from "react-icons/md";
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
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { IFomData } from "./types";
import { error } from "console";
import { api } from '../../services/api';
import { Collunm } from "../../components/header/styles";

const schema = yup
  .object({
    email: yup
      .string()
      .email('E-mail inválido')
      .required('E-mail obrigatório'),
    password: yup
      .string()
      .min(4, 'Mínimo de 4 caracteres')
      .required('Senha obrigatória'),
  })
  .required();

const Login = () => {

  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFomData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async (formData: IFomData) => {
    try {
      const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
      if (data.length === 1) {
        navigate('/feed')
      } else {
        alert('Usuário ou senha inválido')
      }
    } catch (e) {
      alert('Ocorreu um errro, tente novamente mais tarde')
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Collunm>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form>
              <Input
                name="email"
                erroMessage={errors.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                erroMessage={errors.password?.message}
                control={control}
                placeholder="Senha"
                leftIcon={<MdLock />}
              />
              <Button
                title="Entrar"
                variant="secondary"
                // onClick={onSubmit}
                type="button"
              />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Collunm>
      </Container>
    </>
  );
};

export { Login };
