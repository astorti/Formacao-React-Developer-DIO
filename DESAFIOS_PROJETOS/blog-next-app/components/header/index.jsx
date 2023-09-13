import Link from 'next/link'
import styles from 'styles/Header.module.css'

const Header = () => {
    return (
        <div className={`${styles.container}`}>
            <div >
                <h1>FullStack Blog</h1>
            </div>
            <div className={`${styles.newButtonContainer}`}>
                <Link
                    className={`${styles.headerButton}`}
                    href={"/"}
                >Home</Link> 

                <Link
                    className={`${styles.headerButton}`}
                    href={"/new"}
                >New Post</Link>        
            </div>
        </div>
    )
}

export  {Header}