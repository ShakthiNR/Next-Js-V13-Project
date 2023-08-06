'use client'
import { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import { developers, testers, managements } from '@/app/_helper/helperFunctions';


export default function TeamDetails() {

    const params = useParams();
    const [hash, setHash] = useState("")


    useEffect(() => {
        const { hash } = window.location
        setHash(hash.replace("#", ""))
    }, [params]);

    const renderTeamDetails = (array: any) => {

        return <div style={{ display: "flex", gap: "2rem", marginTop:"1rem" }}>
            {
                array.map((elm: any, index: number) => {
                    const { name, role } = elm
                    return (
                        <div key={index}>
                            <h5>{name}</h5>
                            <h6>{role}</h6>
                        </div>
                    )
                })
            }
        </div>
    }

    if (hash === "management")
        return <>
            <h2>Management Team</h2>
            {renderTeamDetails(managements)}
        </>

    else if (hash === "test")
        return <>
            <h2>Testing Team</h2>
            {renderTeamDetails(testers)}
        </>

    return (<>
        <h2>Developer Team</h2>
        {renderTeamDetails(developers)}

    </>)
}