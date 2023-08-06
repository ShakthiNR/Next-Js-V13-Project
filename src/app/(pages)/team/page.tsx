"use client"

import Link from "next/link"
import TeamDetails from "./TeamDetails"
import { useEffect, useState } from 'react';
import { useParams } from "next/navigation";


function Team() {
    return (
        <>
        <title>Next Js | Teams</title>
         <div className="flex-row">
            <TeamNavbar />
        </div>
        </>
       
    )
}

export default Team


const TeamNavbar = () => {
    const params = useParams();
    const [hash, setHash] = useState("")


    useEffect(() => {
        const { hash } = window.location
        setHash(hash.replace("#", ""))
    }, [params]);

    return (
        <div className="flex-row-center" style={{gap:"25rem"}}>
            <nav className="navbar">
                <ul style={{ display: "flex", flexDirection: "column" }}>
                    <li>
                        <Link href="#dev" className={(hash === "" || hash === "dev") ? "activeTeam" : ""}>Developer</Link>
                    </li>
                    <li>
                        <Link href="#test" className={(hash === "test") ? "activeTeam" : ""}>Testing</Link>
                    </li>
                    <li>
                        <Link href="#management" className={(hash === "management") ? "activeTeam" : ""}>Management</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <TeamDetails />
            </div>
        </div>

    )
}