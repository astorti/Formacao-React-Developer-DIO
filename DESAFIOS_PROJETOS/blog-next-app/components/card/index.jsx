import styles from 'styles/Card.module.css'
import React, { Fragment, useState, useEffect } from 'react'
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/router";


const Card = () => {

    const { posts, deletePost } = useAuth()
    const [curent, setCurent] = useState('')
    const navigate = useRouter()

    const readArticle = (id) => {
        const get = posts.find(obj => obj.id === id)
        if (get) {
            setCurent(get)
            navigate.push("/article")
            return            
        }
        alert('Artigo não encontrado')
    }

    useEffect(() => {
        localStorage.setItem('post', JSON.stringify(curent))
    }, [curent])
    
    return (
        <Fragment>
            {posts.map(post => (
                <div className={`${styles.card}`}>
                    <div className={`${styles.head}`}>
                        <h3 className={`${styles.title}`}>{post.title}</h3>
                        <button
                            className={`${styles.delete}`}
                            onClick={() => deletePost(post.id)}
                        >X</button>
                    </div>
                    <p className={`${styles.description}`}>{post.description}</p>
                    <div className={`${styles.footer}`}>
                        <p className={`${styles.date}`}>Created at: {post.created_at}</p>
                        <button
                            className={`${styles.link_view}`}
                            onClick={() => readArticle(post.id)}                        
                        >read post</button>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export  {Card}