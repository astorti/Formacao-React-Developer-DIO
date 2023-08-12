import { ButtonContainer } from "./styled";

const Button = ({label, onClick}) => {
    return (
        <div>
            <ButtonContainer onClick={onClick}>
                {label}
            </ButtonContainer>
        </div>
    );
}

export default Button;
