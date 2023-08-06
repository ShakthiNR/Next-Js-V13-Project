
import ProductList from "./ProductList"
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Next Js | Products',
    description: 'Next JS Application Build by another engineer || Fetch the products list',
}

const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    return data.products
}


export default async function Products() {

    const productData = await getProducts()

    return (
        <>
            <h3 className="center">List of Products</h3>
            <div className="center-layout">
                <div className="grid-container">
                    {
                        productData.map((product: any, index: number) => {
                            const sendThisProps = { ...product, haveLink: true }

                            return (<>
                                <div key={index} className="grid-item">
                                    <ProductList {...sendThisProps} />
                                </div>
                            </>)
                        })
                    }
                </div>
            </div>


        </>
    )
}