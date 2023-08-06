"use client"

import ErrorContent from '@/app/ErrorContent';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductList = (props: any) => {
    const { title, description, price, rating, id, haveLink } = props
    const router = useRouter()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleClick = (id: number) => {
        router.push(`/products/${id}`)
    }

    if (!mounted) return <></>

    if (!title || !description || !price || !rating)
        return <>
            <h1>No Products Found</h1>
        </>

    return (
        <>
            <div className="product-layout" key={id} style={haveLink ? { cursor: "pointer" } : {}}
                onClick={() => {
                    if (haveLink)
                        handleClick(id)
                }} >
                <div className="flex-row">
                    <div>{title}</div>
                    <div>{description}</div>
                </div>

                <div className="flex-row bold">
                    <div>${price}</div>
                    <div>**{rating}**</div>
                </div>
            </div>
        </>
    )
}

export default ProductList