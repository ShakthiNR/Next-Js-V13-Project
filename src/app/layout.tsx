import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from 'next/font/google'
import "@/styles/global.css"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body  className={inter.className}>
                <Navbar />
                {children}
                <Footer/>
            </body>
        </html>
    )
}
