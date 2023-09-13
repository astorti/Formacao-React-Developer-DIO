import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const created_at = "NOW()"
    const [ title, setTitle] = useState('')
    
    const getPosts = async () => {
        try {
            const response = await fetch("http://localhost:5000/posts")
            const jsonData = await response.json()
            setPosts(jsonData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    const submiting = async (title, description, body) => {
    
        setTitle(title)
        try {
            const article = { title, description, created_at, body }
            const response = await fetch("http://localhost:5000/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(article)
            })
            } catch (error) {
                console.log(error)
            }
        }

    const deletePost = async (id) => {
        const del = confirm("Delete post?")
        if (del) {
            try {
                const deletePost = await fetch(`http://localhost:5000/posts/${id}`, {
                    method: "DELETE"
                })
                setPosts(posts.filter(post => post.id !== id))
            } catch (error) {
                console.log(error)
            }
        }
    }
    
    return <AuthContext.Provider value={{ posts, deletePost, submiting }}>
        {children}
    </AuthContext.Provider>
}