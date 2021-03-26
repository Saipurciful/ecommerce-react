import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = (props) => {
    const { product } = props;

    return (
        <Card key={product._id} className='card border-secondary my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img className="medium" src={product.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Text as='div'>
                        <h3>{product.name}</h3>
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
