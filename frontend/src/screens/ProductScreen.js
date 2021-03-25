import React from 'react'
import Product from '../components/Product'
import data from '../data'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import { Button, Card, Col, ListGroup, ListGroupItem, Row, Image } from 'react-bootstrap'

const ProductScreen = (props) => {

    const product = data.products.find((x) => x._id === props.match.params.id);
    if (!product) {
        return <div> Product NOt found</div>
    }
    return (
        <div>
            <Link className='btn btn-dark my-3' to='/'> Go Back</Link>

            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>


                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} review`} />
                        </ListGroupItem>
                        <ListGroupItem>
                            Price: ${product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Description: {product.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>

                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Price:</Col>
                                <strong>${product.price}</strong>
                            </Row>
                        </ListGroupItem>

                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Status:</Col>

                                {product.countInStock > 0 ? (<span className="success">In Stock</span>) : (<span className="danger"> Unavailable </span>)}

                            </Row>
                        </ListGroupItem>


                        <ListGroup.Item>
                            <Button

                                className='btn-block' type='button' disabled={product.countInStock === 0}>ADD TO CART</Button>
                        </ListGroup.Item>

                    </Card>
                </Col>
            </Row>
        </div >

    )
}

export default ProductScreen
