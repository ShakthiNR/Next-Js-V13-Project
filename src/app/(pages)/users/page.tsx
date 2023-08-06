import Link from "next/link";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Next Js | Users',
    description: 'Next JS Application Build by another engineer || Fetch details about users',
}

export default function Users (){
    return (
        <>
         <div className="flex-column p-10">
            <h1>Page Under Constructions :) !!! </h1>
            <p> <Link href="/">Go Home</Link></p>
         </div>
        </>
    )
}