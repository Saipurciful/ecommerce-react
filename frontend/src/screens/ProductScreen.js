import React, { useState, useEffect } from 'react'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Col, ListGroup, ListGroupItem, Row, Image, FormControl } from 'react-bootstrap'
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import { detailsProduct } from '../actions/productActions'

const ProductScreen = (props) => {

    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    }
    return (
        <div>

            {loading ? (<LoadingBox ></LoadingBox>
            ) :
                error ? (<MessageBox variant="danger">{error}</MessageBox>
                ) : (
                        <Row>
                            <div>
                                <Link style={{ marginLeft: "3rem" }} className='btn btn-dark my-3' to='/'> Back</Link>

                                <Row>
                                    <Col md={5} key={product._id}>
                                        <Image src={product.image} alt={product.name} style={{ alignContent: "center", marginLeft: "10rem" }} />
                                    </Col>


                                    <Col md={3}>
                                        <ListGroup variant='flush'>
                                            <ListGroupItem>
                                                <h3>{product.name}</h3>
                                                {/* </ListGroupItem>
                                            <ListGroupItem> */}
                                                <Rating
                                                    rating={product.rating}
                                                    numReviews={product.numReviews} />
                                            </ListGroupItem>
                                            {/* <ListGroupItem>
                                                Price: ${product.price}
                                            </ListGroupItem> */}
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

                                            {product.countInStock > 0 && (
                                                <ListGroupItem>
                                                    <Row>
                                                        <Col>
                                                            Qty</Col>
                                                        <Col>
                                                            <FormControl as='select' value={qty} onChange={(e) => setQty(e.target.value)}> {

                                                                [...Array(product.countInStock).keys()].map((x) => (
                                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>


                                                                ))}
                                                            </FormControl>
                                                        </Col>
                                                    </Row>
                                                </ListGroupItem>
                                            )}

                                            <ListGroup.Item>
                                                <Button
                                                    onClick={addToCartHandler}
                                                    className='btn-block'>ADD TO CART</Button>
                                            </ListGroup.Item>
                                        </Card>
                                    </Col>
                                </Row>
                            </div >

                        </Row>
                    )}
        </div>
    )
}

export default ProductScreen
