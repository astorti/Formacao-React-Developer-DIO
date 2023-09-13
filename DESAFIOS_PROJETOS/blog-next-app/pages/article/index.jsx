import { Inter } from 'next/font/google'
import styles from 'styles/Home.module.css'
import { Header } from '@/components/header'
import { Text } from '@/components/text'
import { AuthContextProvider } from "../../context/auth";

const inter = Inter({ subsets: ['latin'] })

export default function Article() {
    return (
    
        <>
        <div className={`${styles.main} ${inter.className}`}>
            <AuthContextProvider>
                <Header/>
                <Text/>
            </AuthContextProvider> 
        </div>
        </>
    
    )
}
