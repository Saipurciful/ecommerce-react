import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = (props) => {
    const { product } = props;

    return (
        <Card className='card border-secondary my-3 p-3 rounded' style={{ height: "400px" }}>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Text as='div'>
                        <h4>{product.name}</h4>
                    </Card.Text>
                </Link>

                <Card.Text as='div'>
                    <Rating
                        rating={product.rating}
                        numReviews={product.numReviews}

                    />
                </Card.Text>

                <Card.Text as='h3'>${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
