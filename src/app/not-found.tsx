import Link from "next/link";
import type { Metadata } from 'next'


export default function NotFound (){
    return (
        <>
         <div className="flex-column p-10">
            <h1>OOPS !!! Page Not Found</h1>
            <p> <Link href="/">Go Home</Link></p>
         </div>
        </>
    )
}