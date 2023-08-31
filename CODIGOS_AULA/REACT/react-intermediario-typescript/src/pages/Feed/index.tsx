import React from 'react'
import { Header } from '../../components/Header';
import { Container, Column, Title, TitleHighlight } from './styles';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import avatar from '../../assets/imageUser.png'

const Feed = () => {
    return (
        <div>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                    <UserInfo nome="André Andrade" image={avatar} percentual={100}/>
                    <UserInfo nome="André Andrade" image={avatar} percentual={75}/>
                    <UserInfo nome="André Andrade" image={avatar} percentual={50}/>
                    <UserInfo nome="André Andrade" image={avatar} percentual={25}/>
                </Column>
            </Container>
        </div>
    )
}

export { Feed }; 