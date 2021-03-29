import React, { useState } from 'react'
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer';

const SigninScreen = () => {


    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ')

    const submitHandler = (e) => {
        e.preventDefault();

        // todo: sigin action
    }
    return (
        <FormContainer>
            <h1>Sign In</h1>

            <Form className="form" onSubmit={submitHandler}>

                <FormGroup controlId='email'>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl type="email" id="email" placeholder="Enter email" required onChange={e => setEmail(e.target.value)} />
                </FormGroup>


                <FormGroup controlId='password'>
                    <FormLabel> Password</FormLabel>

                    <FormControl type="password" id="password" placeholder="Enter password" required onChange={e => setPassword(e.target.value)} />

                </FormGroup>

                <Button type='submit' variant='primary'>
                    Sign In
        </Button>
            </Form>

            <Row className='py-3'>
                <Col>

                    New customer?
                        <Link to="/register"> Create your account</Link>

                </Col>
            </Row>

        </FormContainer >
    )
}

export default SigninScreen
