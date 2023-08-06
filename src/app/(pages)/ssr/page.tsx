import Link from "next/link";

export default function SSRPage() {
    return (
        <>
            <div className="center">
                <p> SSR Topics</p>
            </div>

            <nav className="navbar">
                <ul>
                    <li>
                        <Link href="/ssr/static">Static</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/ssr/dynamic">Dynamic</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/ssr/isr">ISR</Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}