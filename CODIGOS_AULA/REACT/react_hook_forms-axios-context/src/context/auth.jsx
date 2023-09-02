import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const navigate = useNavigate()
    const [books, setBooks] = useState([])

    useEffect(() => {
        handleListBook();
    }, [books])

    const handleOnSubmit = async (formData) => {
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

    const handleListBook = async () => {
        try {
            const { data } = await api.get(`/books`);
            setBooks(data)
        } catch (e) {
            console.log("")
        }
    }
    
    return <AuthContext.Provider value={{ handleOnSubmit, handleListBook, books }}>
        {children}
    </AuthContext.Provider>
};

