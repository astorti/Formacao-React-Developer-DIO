import "../../styles.css";
import { InputText } from './styles';

import {  Controller } from "react-hook-form"

const Input = ({ control, name }) => {
    
    return (
    <div>
            <Controller
            name={name}
            control={control}
            rules={{required: true}}        
            render={({ field }) => <InputText {...field} /> }
            />        
    </div>
    );
}

export {Input};
