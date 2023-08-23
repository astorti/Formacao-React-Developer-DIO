import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: top;
    margin-top: 50px;
    width: 90%;
    height: 100vh;
`

export const LeftText = styled.p`
    width: 50%;
    margin-left: 10%;
    margin-right: 25%;
    font-size: 32px;
    font-weight: 700;
`

export const RightContent = styled.div`
    width: 50%;
    align-items: left;
    
`

export const MainRightText = styled.p`
    font-size: 32px;
    font-weight: 700;
`

export const SecondaryRightText = styled.p`
    margin: 5px 0 20px 0;
`

export const CreateAccountButton = styled.div`
    width: 80%;
    margin-top: 40px;
    margin-bottom: 30px;
`
export const ThirdRightText = styled.p`
    font-weight: 700;
    margin-right: 5px;
`
export const GreenColorText = styled.p`
    color: green;
    font-weight: 700;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: left;
`