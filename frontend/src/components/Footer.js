import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    {/* py padding top and bottom y access */}
                    <Col className='text-center py-3'>Copyright &copy; Sai Purciful
                    
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer
