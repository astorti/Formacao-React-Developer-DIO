import React from "react";
import logo from "../../assets/logo-dio.png"
import { Button } from "../Button"
import {
    BuscarInputContainer,
    Row,
    Container,
    Input,
    Menu,
    MenuRight,
    Wrapper,
    UserPicture
} from "./styles";
import avatar from '../../assets/imageUser.png';
import { IHeader } from "./types";

const Header = ({autenticado}: IHeader) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                {autenticado ? (
                        <UserPicture src={avatar} />
                    ) : (
                    <>
                        <MenuRight href="/">Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" />
                    </>)}
                </Row>
            </Container>
        </Wrapper>
    )
}

export  {Header}