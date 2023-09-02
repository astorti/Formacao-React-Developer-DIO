import "../../styles.css";
import { Content, Itemlist, ListContainer, ListTitle } from './styles';
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../hooks/useAuth'

const List = () => {

    const navigate = useNavigate();
    const { books } = useAuth()
    
    const handleBackHome = () => {
        navigate('/')
    }

    return (
        <div>    
            <Content>
                <button className="backButton" onClick={handleBackHome}>Voltar</button>
                <ListContainer>
                    <ListTitle><u>Livros Cadastrados</u></ListTitle>
                    {books.map((book) => (<Itemlist>{book.name}<hr/></Itemlist>))}    
                </ListContainer>
            </Content>
            
        </div>
    );
}

export {List};
