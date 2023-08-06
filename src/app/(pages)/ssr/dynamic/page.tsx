import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Dynamic SSR',
    description: 'Next JS Application Build by another engineer | Dynamic SSR',
}

export const revalidate = 0;

async function Dynamic() {

    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY,
        {
            // cache: "no-cache"/"no-store"
            // next: { revalidate: 0 }
        });
    const image = await response.json();

    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;
    return (
        <div >
            <div style={{ paddingLeft: "5rem" }}>
                <Link href="/ssr">Go back</Link>
            </div>
            <div className='p-5 center'>
                <p style={{ fontWeight: 600, color: "red" }}>Dynamic SSR</p>
            </div>

            <div className='flex-row-center'>
                <div className='center'>
                    This page <strong>fetches data dynamically</strong>. <br/>
                    Every time you refresh the page, you get a new image from the Unsplash API.
                </div>
            </div>
            <div className='flex-row-center'>
                <Image
                    src={image.urls.raw}
                    width={width}
                    height={height}
                    alt={image.description}
                    style={{
                        maxWidth: "100%",
                        height: "500px !important",
                        borderRadius: "5px",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
                    }}
                />
                by <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
            </div>
        </div>
    )
}

export default Dynamic