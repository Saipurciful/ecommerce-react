import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import data from '../data'

const ProductScreen = () => {
    return (
        <>
            <Row>
                {data.products.map((products) => (

                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Product key={products._id} product={products} />
                    </Col>
                ))}

            </Row>

        </>
    )
}

export default ProductScreen
