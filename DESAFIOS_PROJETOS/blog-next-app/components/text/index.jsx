import React, { Fragment, useEffect, useState } from 'react'
import styles from 'styles/Text.module.css'
import Link from 'next/link';

const Text = () => {

    const [post, setPost] = useState('')

    useEffect(() => {
        let getPost = localStorage.getItem("post")
        let currentPost = JSON.parse(getPost)
        setPost(currentPost)
    }, [])

    return (
        <Fragment>
            <div className={`${styles.page} `}>
                <h1 className={`${styles.title}`}>{post.title }</h1>
                <p className={`${styles.date}`}>Posted: {post.created_at}</p>
                <p className={`${styles.text}`}>{post.body}</p>
                <div className={`${styles.contentBackLink}`}>
                    <Link className={`${styles.backLink}`} href={`/`}>Back</Link>
                </div>
            </div>
        </Fragment>
    )
}

export  {Text}