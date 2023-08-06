"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import "@/styles/navbar.css"

const Navbar = () => {

    const pathName = usePathname();

    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link href="/" className={(pathName === "/") ? "active" : ""}>Home</Link>
                    </li>
                    <li>
                        <Link href="/products" className={(pathName === "/products") ? "active" : ""}>Products</Link>
                    </li>
                    <li>
                        <Link href="/users" className={(pathName === "/users") ? "active" : ""}>Users</Link>
                    </li>
                    <li>
                        <Link href="/team" className={(pathName === "/team") ? "active" : ""}>Team</Link>
                    </li>
                    <li>
                        <Link href="/about-us" className={(pathName === "/about-us") ? "active" : ""}>About Us</Link>
                    </li>
                    <li>
                        <Link href="/ssr" className={(pathName === "/ssr") ? "active" : ""}>SSR</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar