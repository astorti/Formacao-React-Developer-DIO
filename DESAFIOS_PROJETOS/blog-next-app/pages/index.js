import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from 'styles/Home.module.css'
import { Header } from '@/components/header'
import { Card } from '@/components/card'
import { AuthContextProvider } from "../context/auth";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>FullStack Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <>
        <div className={`${styles.main} ${inter.className}`}>
          <AuthContextProvider>
            <Header />
            <div className={`${styles.listCards}`}>
              <Card />
            </div>
            
          </AuthContextProvider> 
        </div>
      </>
    </>
  )
}
