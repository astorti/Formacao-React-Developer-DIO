import "../../styles.css";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

const Home = () => {

    const { handleOnSubmit } = useAuth()
    const { control, handleSubmit } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        handleOnSubmit(formData)
    }

    return (
    <div className="form">
        <h2>Formulário livros</h2>
        <form className="form2" onSubmit={handleSubmit(onSubmit)}>
            <label>Book: </label>
            <Input type="text" placeholder="Livro" name="checkbook" control={control} />  
            <button >Enviar</button>
        </form>
        <p>Para acessar a lista de livros cadastrados, deve ser informado um livro constante na lista.</p>    
            
        </div>
    );
}

export {Home};
