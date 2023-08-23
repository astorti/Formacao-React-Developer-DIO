import React from "react";
import logo from "../../assets/logo-dio.png";
import { Wrapper, Container, Row, MenuRight } from "./styles";
import { Button } from "../button";

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="" />
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}