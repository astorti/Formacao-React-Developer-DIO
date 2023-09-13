import React, { Fragment, useEffect, useState } from 'react'
import styles from 'styles/Input.module.css'
import { useRouter } from "next/router";
import { useAuth } from '@/hooks/useAuth';

const Input = () => {

    const navigate = useRouter()
    const { submiting } =useAuth()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')

    const handleSaveForm = () => {
        submiting(title, description, body)
        navigate.push("/")
    }

    return (
        <Fragment>
            <div className={`${styles.title}`}>
                <h3>New Article</h3>
            </div>
            
            <div className={`${styles.main}`}>

                <form className={`${styles.form}`} onSubmit={handleSaveForm}>
                    <div className={`${styles.formLine}`}>
                        <label>Title: </label>
                        <input className={`${styles.input}`} type='text' value={title} onChange={e => setTitle(e.target.value)}></input>
                    </div>
                    <div className={`${styles.formLine}`}>
                        <label>Description: </label>
                        <input className={`${styles.input}`} type='text' value={description} onChange={e => setDescription(e.target.value)}></input>
                    </div>
                    <div className={`${styles.formLine}`}>
                        <label>Text: </label>
                        <textarea className={`${styles.input}`} rows="5" value={body} onChange={e => setBody(e.target.value)}></textarea> 
                    </div>
                    <div className={`${styles.formButtonLine}`}>
                        <button className={`${styles.saveButton}`} type='submit'>Save</button>
                    </div>
                </form>

            </div>        
        </Fragment>
    )
}

export { Input }