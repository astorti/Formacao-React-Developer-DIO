import "../../styles.css";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { api } from '../../services/api';

const Home = () => {

    const navigate = useNavigate();
    
    const { control, handleSubmit } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`/books?name=${formData.checkbook}`);
            
            if(data.length === 1 && data[0].id) {
                navigate('/list') 
                return
            }
            alert('Livro não consta na lista')
        }catch(e){
            alert("Ocorreu uma falha no sistema")
        }
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
