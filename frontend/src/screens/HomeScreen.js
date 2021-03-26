import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

import { listProducts } from '../actions/productActions'


const HomeScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts({}));
    }, [dispatch])
    return (
        <div>

            {loading ? (<LoadingBox ></LoadingBox>
            ) :
                error ? (<MessageBox variant="danger">{error}</MessageBox>
                ) : (
                        <Row>
                            {products.map((products) => (

                                <Col sm={12} md={6} lg={4} xl={3}>
                                    <Product key={products._id} product={products} />
                                </Col>
                            ))}

                        </Row>
                    )}


        </div>
    )
}

export default HomeScreen
