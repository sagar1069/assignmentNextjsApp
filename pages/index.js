import Head from 'next/head';
import Dashboard from '../components/dashboard/dashboard';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className={inter.className}>
   <Dashboard/>
    </main>
  
  )
}
