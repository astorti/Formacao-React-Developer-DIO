import "../../styles.css";
import { Content, Itemlist, ListContainer, ListTitle } from './styles';
import { useNavigate } from "react-router-dom"
import { api } from '../../services/api';
import { useState, useEffect } from "react";

const List = () => {

    const navigate = useNavigate();
    const [books, setBooks] = useState([''])

    const handleBackHome = () => {
        navigate('/')
    }

    useEffect(() => {
        handleListBook();
    }, [])

    const handleListBook = async () => {
        try {
            const { data } = await api.get(`/books`);
            setBooks(data)
        } catch (e) {
            console.log("")
        }
    }
    
    return (
        <div>    
            <Content>
                <button className="backButton" onClick={handleBackHome}>Voltar</button>
                <ListContainer>
                    <ListTitle><u>Livros Cadastrados</u></ListTitle>
                    {books.map((book) => (<Itemlist>{book.name} - {book.author}<hr/></Itemlist>))}    
                </ListContainer>
            </Content>
            
        </div>
    );
}

export {List};
