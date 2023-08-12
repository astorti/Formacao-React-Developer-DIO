import { InputContainer } from "./styled";

const Input = ({value}) => {
    return (
        <div >
            <InputContainer>
                <input disabled value={value} />
            </InputContainer>
        </div>
    );
}

export default Input;
