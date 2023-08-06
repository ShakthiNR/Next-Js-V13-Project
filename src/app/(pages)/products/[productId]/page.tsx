import Link from "next/link";
import ProductList from "../ProductList";

interface IProductProps {
    params: {
        productId: string;
    };
}

import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Next Js | Product ",
    description:
        "Next JS Application Build by another engineer || Fetch unique product",
};

const getProduct = async (params: string) => {

    await new Promise((resolve)=> setTimeout(resolve, 1000))

    const res = await fetch(`https://dummyjson.com/products/${params}`, { cache: "no-cache" });
    const data = await res.json();
    return data;
};

async function Product(props: IProductProps) {
    const {
        params: { productId },
    } = props;

    const productData = await getProduct(productId);
    const sendThisProps = {...productData, haveLink: false}

    return (
        <>
           
            <div style={{ width: "50vw", margin: "0 auto" }}>
            <Link href="/products">Go to products</Link>
                <Suspense fallback={<p>Loading ...</p>}>
                    <ProductList {...sendThisProps} />
                </Suspense>
            </div>
        </>
    );
}

export default Product;
