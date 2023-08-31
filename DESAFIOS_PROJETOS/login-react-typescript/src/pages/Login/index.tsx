import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title, Form } from "./styles";
import { defaultValues, IFormLogin } from "./types";
import { useEffect } from "react";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {

  const {
    control,
    formState: { errors, isValid }, handleSubmit, reset
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  
  const handleOnClick = () => {
    reset()
    alert("Acesso Liberado")
  }
  
  useEffect(() => {
    console.log("disabled: " + !isValid)
  }, [isValid])
  
  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Form onSubmit={handleSubmit(handleOnClick)} >
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          <Button title="Login" type="submit"  disabled={!isValid} />
          </Form>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;