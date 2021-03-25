import React from 'react'
import Product from '../components/Product';
import data from '../data'

const ProductScreen = () => {
    return (
        <div className="row center">

            {data.products.map((products) => (

                <Product key={products._id} product={products} />

            )

            )}

        </div>
    )
}

export default ProductScreen
